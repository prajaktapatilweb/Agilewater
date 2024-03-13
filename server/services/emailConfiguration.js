const nodemailer = require('nodemailer');
const {google} = require('googleapis');
require('dotenv').config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID_EMAIL,
  process.env.CLEINT_SECRET,
  process.env.REDIRECT_URI,
);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

module.exports = async function sendMail(
  senderemailid,
  // receiveremailid,
  // subjectofemail,
  // emailcontent,
) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'info@1to1guru.com',
        clientId: process.env.CLIENT_ID_EMAIL,
        clientSecret: process.env.CLEINT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // const mailOptions = {
    //   from: senderemailid,
    //   to: receiveremailid,
    //   bcc: senderemailid,
    //   subject: subjectofemail,
    //   text: emailcontent,
    //   html: emailcontent,
    // };
    const mailOptions = {
      from: "prajaktaweb@gmail.com", // sender
      to: senderemailid, // receiver
      subject: "My tutorial brought me here", // Subject
      html: "<p>You have received this email using nodemailer, you are welcome ;)</p>", // html body
    };
  console.log('result',mailOptions)
    const result = await transport.sendMail(mailOptions);
    console.log('result2',result)
    return result;
  } catch (error) {
    return error;
  }
};
