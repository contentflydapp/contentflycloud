const functions = require("firebase-functions")
const logger = require("firebase-functions/lib/logger")

const { PubSub } = require("@google-cloud/pubsub")
const pubsub = new PubSub()

const { runtimeOpts, Topic, postmarkRuntimeOpts } = require("../utility/common")

// Postmark
const postmark = require("postmark")

const FromEmail = "Content Fly <support@main.contentfly.app>"
const StandatdTemplate = "standard-template"

/**
 * Fetch notifications from Content Fly NotifyQueue canister
 *
 * FB Shell: fetchNewNotifications()
 */
exports.fetchNewNotifications = functions
  .runWith(runtimeOpts)
  .pubsub.schedule("3 * * * *")
  .timeZone("Australia/Melbourne")
  .onRun(async context => {
    try {
      // TODO - Fetch new email notifcations array JSON from Canister with max of 5, loop through it to publish message
      const json = {
        recipientEmail: "henry@kinwo.net",
        recipientName: "Henry Chan",
        subject: "Invitation from Apple",
        topic: "inviteCreatorToJob",
        mainContent: "Apple has sent you an invitation to pitch on their job.",
        actionMessage: "Pitch Now",
        actionURL:
          "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"
      }
      const messageId = await pubsub
        .topic(Topic.NewEmailNotification)
        .publishMessage({ json })

      logger.info(`OrderPlaced message ${messageId} published.`)

      logger.info("Finishing running fetchNewNotifications")
    } catch (error) {
      logger.error("Error in fetchNewNotifications: ", error)
    }
  })

/**
 * Send email notification to user using Postmark
 *
 * FB Shell: sendTransactionalEmail({data: new Buffer('{"recipientName": "Henry Chan", "recipientEmail": "henry@kinwo.net", "subject": "Invitation from Apple", "mainContent": "Apple has sent you an invitation to pitch on their job.", "actionMessage": "Pitch Now", "actionURL": "https://ypu2m-miaaa-aaaah-qamoq-cai.raw.ic0.app/myjobs.html?id=5"}')})
 */
exports.sendTransactionalEmail = functions
  .runWith(postmarkRuntimeOpts)
  .pubsub.topic(Topic.NewEmailNotification)
  .onPublish(async message => {
    try {
      const body = message.json

      logger.info(`recipientEmail=${body.recipientEmail}`)

      const templateModel = {
        recipientName: body.recipientName,
        subject: body.subject,
        mainContent: body.mainContent,
        actionMessage: body.actionMessage,
        actionURL: body.actionURL
      }

      const PostmarkServerToken = process.env.POSTMARK_SERVER_TOKEN
      const postmarkClient = new postmark.ServerClient(PostmarkServerToken)

      const result = await postmarkClient.sendEmailWithTemplate({
        From: FromEmail,
        To: body.recipientEmail,
        TemplateAlias: StandatdTemplate,
        TemplateModel: templateModel,
        MessageStream: "outbound"
      })

      logger.info(result)
    } catch (error) {
      logger.error("Error caughe when sending email to user: ", error)
    }
  })
