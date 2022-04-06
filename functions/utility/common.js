const runtimeOpts = {
  timeoutSeconds: 540,
  memory: "256MB"
}

const postmarkRuntimeOpts = {
  ...runtimeOpts,
  secrets: ["POSTMARK_SERVER_TOKEN"]
}

const Topic = {
  NewEmailNotification: "NewEmailNotification"
}

module.exports = {
  runtimeOpts,
  postmarkRuntimeOpts,
  Topic
}
