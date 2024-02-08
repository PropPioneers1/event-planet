const nodemailer = require("nodemailer");

require('dotenv').config();

const sendMail=async(req,res)=>{

    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.USER, // sender gmail address
          pass: process.env.APP_PASSWORD, // app password from gmail account
        },
      });
    
    
      const mailOptions=await transporter.sendMail({
        from: {
            name: 'Event Planet',
            address:process.env.USER
        }, // sender address
        to: ["rohanrifat43@gmail.com"], // list of receivers
        subject: "Send email nodemailer and gmail", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
      })

      console.log("Message sent: %s", mailOptions.messageId);
      res.json(mailOptions)
}


  module.exports=sendMail;