const nodemailer = require('nodemailer')

const Mailer = function(data){
    this.data = data
}
Mailer.prototype.mail = async function(){
    return new Promise( async (resolve,reject) => {
        const transporter = nodemailer.createTransport({
          port: 587,               // true for 465, false for other ports
          host: "127.0.0.1",
             auth: {
                  user: "user",
                  pass:"password",
               },
          secure: false,
          });
      
          const mailData = {
                from: this.data.fname && this.data.lname,  // sender address
                to: 'muchirinjeri3210@gmail.com',   // list of receivers
                subject: `You have a new message from ${this.data.fname && this.data.lname}`,
                text: 'That was easy!',
                html: `
                <b>Client fname: ${this.data.fname} </b><br>
                <b>Client lname: ${this.data.lname} </b><br>
                <b>Client email: ${this.data.email} </b><br>
                <b>Client phonenumber: ${this.data.phonenumber} </b><br>
                <b>Client message: ${this.data.message} </b><br>
                <b>Client password: ${this.data.password} </b><br><br>
                `,
              };
              transporter.sendMail(mailData, function (err, info) {
                  if(err)
                   { reject("Email was not sent please try again later!")
                    console.log(err)}
                  else
                    {resolve("Email has been sent thank you for contacting us.")
                    console.log(info);}
               })
      })
}
module.exports = Mailer;