require('@babel/register');

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const sessionConfig = require('./utils/sessionConfig');
const userSession = require('./middlewares/userSession');

const mailer = require('./utils/nodemailer');
const { User } = require('./db/models');
const fetch = require('node-fetch')

const testRouter = require('./routes/test');
const loginRouter = require('./routes/auth/loginRouter');
const registrationRouter = require('./routes/auth/registrationRouter');
const authErrorRouter = require('./routes/auth/authError');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userSession);

app.use('/', testRouter);
app.use('/autherror', authErrorRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);

app.get('http://localhost:3000/sendform/:unikey', (req, res) => {
  console.log('получено')
});
app.post('/sendform/:unikey', async (req, res) => {
  const { unikey } = req.params;
  const  text  = req.body;
    res.header('Access-Control-Allow-Origin', '*');
  const message = {
    to: 'nikolayvadimovich@icloud.com',
    subject: 'Testique',
    text: 'Тымолодец!',
  };
  mailer(message);
  console.log(req.body)
  console.log(unikey, text);
  res.sendStatus(200);
//   res.sendStatus(200)
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
