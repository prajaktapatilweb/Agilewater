require('dotenv').config();
const moment = require('moment');
let nodemailer = require('nodemailer');

console.log(
  'first',
  process.env.EMAILID,
  process.env.WIN_PASS,
  process.env.LINUX_PASS,
  process.env.API_TEST,
);
const client = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: `${process.env.EMAILID}`,
    // App password for Gmail and window machine
    pass: `${process.env.WIN_PASS}`,
    // ""
    // App Password for Linux server
    // pass: `${process.env.LINUX_PASS}`""
  },
});

module.exports = {
  client,
};
