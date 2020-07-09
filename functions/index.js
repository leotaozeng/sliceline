// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText

const { email, password } = require('./config')
const APP_NAME = 'Sliceline'

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
})

mailTransporter.use('compile', htmlToText())

function sendOrderEmail() {
  const mailOptions = {
    from: `${APP_NAME} <noreply@sliceline.com`,
    to: email,
    subject: `Your order from ${APP_NAME}.`,
    html: `
      <div>
        <b>Hello world</b>
      </div>
    `
  }

  mailTransporter.sendMail(mailOptions)
}

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.sendUserEmail = functions.database
  .ref('/orders/{userId}')
  .onCreate(() => {
    sendOrderEmail()
  })
