'use strict';
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host:  process.env.EMAILSERVER,
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASSWORD
  }
});
module.exports = function sendEmail(opts, req, res, next){
  transporter.sendMail(opts, (error) => {
    if (error) {
      next(error);
    } else {
      res.end();
    }
  });
};