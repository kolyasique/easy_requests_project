require('@babel/register');

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sessionConfig = require('./utils/sessionConfig');
const userSession = require('./middlewares/userSession');

const testRouter = require('./routes/test');
const loginRouter = require('./routes/auth/loginRouter');
const registrationRouter = require('./routes/auth/registrationRouter');
const authErrorRouter = require('./routes/auth/authError');


const app = express()


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


const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))