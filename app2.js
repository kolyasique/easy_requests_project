require('@babel/register');

const express = require('express');
const corsPage = require('./views/cors/Secret')
const renderTemplate = require('./utils/render/renderTemplateSTD')
const app = express()

app.get('/', (req, res)=>{

    // res.json({hello:'mina'})
    const drf = renderTemplate(corsPage, null, res)
})
const PORT = 4000
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))