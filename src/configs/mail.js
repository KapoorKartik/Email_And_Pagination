const nodemailer = require("nodemailer")


module.exports =  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
      user: "010f1341606ce4",
      pass: "32e86c7a2b795d",
    },
  });