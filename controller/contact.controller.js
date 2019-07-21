const mongoose = require("mongoose");
const Contact = mongoose.model("Contact");
const nodemailer=require('nodemailer');

module.exports.addContact=(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;

    let newContact = new Contact({
        username: username,
        email: email,
        phone: phone,
        subject: subject,

      });
      newContact.save((err,doc)=>{
          if(err){console.log(err)}
          else{
              let transporter=nodemailer.createTransport({
                service:'gmail',
                auth:{
                  user:'salah.hasanin19@gmail.com',
                  pass:'halas5555'
                }
              });
            const mailOptions={
              from:'no-reply@yanhamer.com',
              to:"contact@yanhamer.com",
              subject:'Contact Us Email',
              html: `<h1>username:${username}<h1><br>
                     <h1>email:${email}<h1><br>
                     <h1>phone:${phone}<h1><br>
                     <h1>subject:${subject}<h1>`
            };
            console.log(mailOptions);
            transporter.sendMail(mailOptions,(err,info)=>{
              if (err) console.log(err)
              else console.log('good')
            });//finish send email};
      };
//send email
    });
}
