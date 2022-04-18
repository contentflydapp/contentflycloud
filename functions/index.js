// Deploy to Firebase all functions: firebase deploy --only functions
// Deploy to Firebase specific function: firebase deploy --only functions:fetchNewNotifications

// Email
const {
  fetchNewNotifications,
  sendTransactionalEmail
} = require("./entry/email")
exports.fetchNewNotifications = fetchNewNotifications
exports.sendTransactionalEmail = sendTransactionalEmail
