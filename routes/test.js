const testRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplateSTD');
const Test = require('../views/Test');

testRouter.get('/', async (req, res) => {
  try {
    renderTemplate(Test, null, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = testRouter;
