require('@babel/register');
const express = require('express')
const morgan = require('morgan')

const testRouter = require('./routes/test');

const app = express()


app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(userSession);

app.use('/test', testRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))