require('@babel/register');

const express = require('express');
const cors = require('cors')
const corsPage = require('./views/cors/Secret')
const renderTemplate = require('./utils/render/renderTemplateSTD')
const fetch = require('node-fetch')

const app = express()

app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*')
    // res.json({hello:'mina'})
    const drf = renderTemplate(corsPage, null, res)
})

app.post('http://localhost:3000/sendform/:unikey', (req, res)=>{
    // const { unikey } = req.params
    console.log('PRIVER')
    res.header('Access-Control-Allow-Origin', '*');
    res.sendStatus(200)
   
})

const PORT = 4000
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))