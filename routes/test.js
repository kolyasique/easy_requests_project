const testRouter = require('express').Router();
const renderTemplate = require('../utils/render/renderTemplateSTD');
const randomFormUniKey = require('../utils/random/randomFormUniKey');
const Test = require('../views/Test');
const { Site, Form } = require('../db/models');

testRouter.get('/', async (req, res) => {
  try {
    const formUniKey = randomFormUniKey();
    console.log(formUniKey, 'Форм юни ки');

    const { id } = req.session.user;
    const mySites = await Site.findAll({ where: { user_id: id }, include: Form });
    console.log(mySites);
    renderTemplate(Test, { formUniKey, mySites }, res);
  } catch (error) {
    console.log(error);
  }
});

testRouter.post('/addsite', async (req, res) => {
  try {
    const { title, web } = req.body;
    const { user } = req.session;
    const addSite = await Site.create({ title, web, user_id: user.id });
    res.sendStatus(200);
  } catch (error) {

  }
});

testRouter.post('/createform', async (req, res) => {
  try {
    const formtypes = req.body;
    const valuesArr = Object.values(formtypes);

    const innerCreation = function (allInp) {
      const arr1 = [];

      const beginForm = `<form action='/http://localhost:3000/sendform/${123}/' method=\'POST\'>`;
      arr1.push(beginForm);
      const beginForm1 = `<h2>${allInp[1]}</h2>`;
      arr1.push(beginForm1);

      let textInput;

      for (let i = 2; i < allInp.length; i++) {
        switch (allInp[i]) {
          case 'name':
            textInput = '<input type=\'text\' name=\'name\' placeholder=\'Введите имя\'/>';
            break;
          case 'phone':
            textInput = '<input type="tel" id="phone" name="phone" pattern="7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"/>';
            break;
          case 'email':
            textInput = '<input type="email" id="email" pattern=".+@globex\.com" size="30" required/>';
            break;
          case 'text':
            textInput = '<p><textarea rows="10" cols="45" name="text"></textarea></p>';
            break;
          case 'file':
            textInput = '<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">';
            break;
          default:
            textInput = '<input type=\'text\' name=\'name\' placeholder=\'Введите имя\'/>';
            break;
        }
        arr1.push(textInput);
      }
      const endForm = '<button type=\'submit\' id=\'submit-form-creation\' name=\'submit-btn\'>Отправить</button> </form>';
      arr1.push(endForm);
      return arr1.join(',').replaceAll(',', '\n');
    };
    console.log(innerCreation(valuesArr));
    const configuration = innerCreation(valuesArr);
    const findSite = await Site.findOne({ where: { title: valuesArr[0] } });
    console.log(findSite);
    const addFormToDb = await Form.create({ name: valuesArr[1], configuration, site_id: findSite.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = testRouter;
