const functions = require("firebase-functions")
const logger = require("firebase-functions/lib/logger")

const { PubSub } = require("@google-cloud/pubsub")
const pubsub = new PubSub()

const { runtimeOpts, Topic, postmarkRuntimeOpts } = require("../utility/common")

const moment = require("moment")

// Postmark
const postmark = require("postmark")

const FromEmail = "Content Fly <support@main.contentfly.app>"
const PostmarkTemplate = {
  standard: "standard",
  newChatMessage: "newChatMessage",
  jobWithDueDate: "jobWithDueDate"
}

const NotifyTopicNonStandardTemplate = {
  newChatMessage: PostmarkTemplate.newChatMessage,
  jobAwarded: PostmarkTemplate.jobWithDueDate,
  jobFirstDue: PostmarkTemplate.jobWithDueDate
}

// Axios
const http = require("http")
const https = require("https")
const axios = require("axios").default
const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true })
})

const MainContentSeparator = "##"

/**
 * Fetch notifications from Content Fly NotifyQueue canister
 *
 * FB Shell: fetchNewNotifications()
 *
 * Sample JSON:
 * {
      recipientEmail: "henry@kinwo.net",
      recipientName: "Henry Chan",
      subject: "Invitation from Apple",
      topic: "inviteCreatorToJob",
      mainContent: "Apple has sent you an invitation to pitch on their job.",
      actionMessage: "Pitch Now",
      actionURL:
        "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"
    }
 */
exports.fetchNewNotifications = functions
  .runWith(runtimeOpts)
  .pubsub.schedule(`every 1 minutes`)
  .onRun(async context => {
    try {
      const notifyQueueURL = process.env.NOTIFY_QUEUE_URL

      const response = await axiosInstance.get(notifyQueueURL)
      const { data } = response

      if (data.result != null && data.result.length > 0) {
        const promiseArray = []
        for (const model of data.result) {
          const json = model
          const promise = pubsub
            .topic(Topic.NewEmailNotification)
            .publishMessage({ json })
          promiseArray.push(promise)
        }

        const allResult = await Promise.all(promiseArray)
        allResult.map(messageId => {
          logger.info(`NewEmailNotification message ${messageId} published.`)
        })
      }
    } catch (error) {
      logger.error("Error in fetchNewNotifications: ", error)
    }
  })

/**
 * Send email notification to user using Postmark
 *
 * FB Shell: sendTransactionalEmail({data: new Buffer('{"topic": "inviteCreatorToJob", "recipientName": "Henry Chan", "recipientEmail": "henry@kinwo.net", "subject": "Invitation from Apple", "mainContent": "Apple has sent you an invitation to pitch on their job.", "actionMessage": "Pitch Now", "actionURL": "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"}')})
 * FB Shell: sendTransactionalEmail({data: new Buffer('{"topic": "newChatMessage", "recipientName": "Henry Chan", "recipientEmail": "henry@kinwo.net", "subject": "Invitation from Apple", "mainContent": "Apple has sent you an invitation to pitch on their job##I have new chat message.", "actionMessage": "Pitch Now", "actionURL": "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"}')})
 * FB Shell: sendTransactionalEmail({data: new Buffer('{"topic": "jobAwarded", "recipientName": "Henry Chan", "recipientEmail": "henry@kinwo.net", "subject": "You’ve been selected as the (Creator Type) for the job (Job Name)", "mainContent": "(Buyer Name) has selected you as their (creator type) to undertake the following job:##(Job Name Job Name Job Name Job Name Job Name)##1652244893000000", "actionMessage": "Open Job", "actionURL": "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"}')})
 */
exports.sendTransactionalEmail = functions
  .runWith(postmarkRuntimeOpts)
  .pubsub.topic(Topic.NewEmailNotification)
  .onPublish(async message => {
    try {
      const PostmarkServerToken = process.env.POSTMARK_SERVER_TOKEN
      const postmarkClient = new postmark.ServerClient(PostmarkServerToken)
      const body = message.json
      const templateModel = composeTemplateModel(body)

      const result = await postmarkClient.sendEmailWithTemplate({
        From: FromEmail,
        To: body.recipientEmail,
        TemplateAlias: chooseTemplate(body.topic),
        TemplateModel: templateModel,
        MessageStream: "outbound"
      })

      logger.info(result)
    } catch (error) {
      logger.error("Error caughe when sending email to user: ", error)
    }
  })

const chooseTemplate = topic => {
  const template = NotifyTopicNonStandardTemplate[topic]
  return template != null ? template : PostmarkTemplate.standard
}

const splitMainContent = mainContent => {
  const mainContentArray = mainContent.split(MainContentSeparator)
  let firstContent = ""
  let secondContent = ""

  if (mainContentArray.length >= 2) {
    firstContent = mainContentArray[0]
    secondContent = mainContentArray[1]
  }

  return { firstContent, secondContent }
}

const greetingForTopic = (topic, recipientName) => {
  switch (topic) {
    case "jobAwarded":
    case "jobApproved":
      return `Congratulations ${recipientName}!`
    default:
      return `Hi ${recipientName}`
  }
}

const composeTemplateModel = body => {
  const {
    topic,
    recipientName,
    subject,
    mainContent,
    actionMessage,
    actionURL
  } = body

  const greetingWithRecipient = greetingForTopic(topic, recipientName)

  switch (topic) {
    case "newChatMessage": {
      const { firstContent, secondContent } = splitMainContent(mainContent)

      return {
        recipientName: greetingWithRecipient,
        subject: subject,
        introContent: firstContent,
        message: secondContent,
        actionMessage: actionMessage,
        actionURL: actionURL
      }
    }
    case "jobAwarded":
    case "jobFirstDue": {
      const mainContentArray = mainContent.split(MainContentSeparator)
      let firstContent = ""
      let secondContent = ""
      let dueDate = ""

      if (mainContentArray.length >= 3) {
        firstContent = mainContentArray[0]
        secondContent = mainContentArray[1]
        const dueDateNanos = BigInt(mainContentArray[2])
        const dueDateMillis = parseInt(Number(dueDateNanos / BigInt(1000)))
        dueDate = moment(dueDateMillis).format("DD MMM YYYY")
      }

      return {
        recipientName: greetingWithRecipient,
        subject: subject,
        initContent: firstContent,
        mainContent: secondContent,
        dueDate: dueDate,
        actionMessage: actionMessage,
        actionURL: actionURL
      }
    }
    case "jobPendingApproval":
    case "jobChangesRequested":
    case "jobApproved": {
      const { firstContent, secondContent } = splitMainContent(mainContent)

      return {
        recipientName: greetingWithRecipient,
        subject: subject,
        initContent: firstContent,
        mainContent: secondContent,
        actionMessage: actionMessage,
        actionURL: actionURL
      }
    }
    default: {
      return {
        recipientName: greetingWithRecipient,
        subject: subject,
        mainContent: mainContent,
        actionMessage: actionMessage,
        actionURL: actionURL
      }
    }
  }
}
