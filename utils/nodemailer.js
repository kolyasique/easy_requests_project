const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'francisca.wuckert26@ethereal.email',
    pass: 'jd2P2bWJAtahkCwdv6',
  },

},{from: 'Mailer Test <francisca.wuckert26@ethereal.email>'}
);


// const mailOptions = {
//   from: 'yourbesteasyform@yandex.ru',
//   to: 'nikolayvadimovich@icloud.com',
//   subject: 'Testing',
//   text: 'Email send by nodemailer',
// };

const mailer = message =>{
    transporter.sendMail(message, (err, success) => {
        if (err) {
          return console.log(err);
        } else {
            return console.log('Email sent successfully', success);
        }
      });
}

module.exports = mailer