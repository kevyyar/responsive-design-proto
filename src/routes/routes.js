const { Router } = require('express');
const { reset } = require('nodemon');
const nodemailer = require('nodemailer')
const router = Router()

router.post('/send-email', async (req, res) => {
  const {name, email, phone, message} = req.body;

  let contentHTML = `
    <h1>Name: ${name}</h1>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
  `
  
  const transporter = nodemailer.createTransport({
    host: 'mail.kevdev.online',
    port: 587,
    secure: false,
    auth: {
      user: 'ijle@kevdev.online',
      pass: 'english101'
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const info = await transporter.sendMail({
    from: "'IJLE Server' <ijle@kevdev.online>",
    to: 'kevyyar@gmail.com',
    subject: 'Message from Web Form',
    html: contentHTML
  })

  console.log('message sent', info.messageId);
  
  res.redirect('/success.html')
})

module.exports = router