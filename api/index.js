const express = require("express");
require('dotenv').config()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')
const baseDir = `${__dirname}/build/`;
const port = process.env.PORT;


//const app = express(express.static(`${baseDir}`));
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())
//app.use(express.static(`${baseDir}`));


app.post('/api/send-email', async (req, res) => {
  const data = req.body

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: data.assunto,
      text: data.body
    };
    await wrapedSendMail(mailOptions)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }

  return res.sendStatus(200)

})

//app.get("*", (req, res) => res.sendFile("index.html", { root: baseDir }));

// app.listen(port || 4000, () =>
//   console.log(`Servidor subiu com sucesso em http://localhost:${port}`)
// );

async function wrapedSendMail(mailOptions) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    console.log(mailOptions)

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(false)
      } else {
        console.log('Email enviado: ' + info.response);
        resolve(true)
      }
    });

  })
}

module.exports = app