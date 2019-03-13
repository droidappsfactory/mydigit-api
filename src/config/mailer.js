// 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
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
module.exports.msg = {
  to: 'email2rishi13@gmail.com',
  from: 'mydigit@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
module.exports.sgMail = sgMail;