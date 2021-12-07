const transporter = require("../configs/mail")


module.exports =(from,to,subject,text,html) => {
    
    let message = {
        from,
        to,
        subject,
        text,
        html
            }
      transporter.sendMail(message)
}

