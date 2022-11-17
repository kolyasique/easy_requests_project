const testRouter = require('express').Router();
const renderTemplate = require('../utils/render/renderTemplateSTD');
const randomFormUniKey = require('../utils/random/randomFormUniKey');
const Test = require('../views/Test');
const {Site} = require('../db/models')

testRouter.get('/', async (req, res) => {
  try {
    const formUniKey = randomFormUniKey();
    console.log(formUniKey, 'Форм юни ки');
    
    const {id} = req.session.user
    const mySites = await Site.findAll({where:{user_id:id }})
    console.log(mySites)
    renderTemplate(Test, { formUniKey, mySites }, res);
  } catch (error) {
    console.log(error);
  }
});

testRouter.post('/addsite', async (req,res) =>{
try {
    const {title, web} = req.body
    const {user} = req.session
    const addSite = await Site.create({ title: title, web: web, user_id: user.id})
    res.sendStatus(200)
} catch (error) {
    
}
})

testRouter.post('/', async (req, res) => {
  try {
    const formtypes = req.body;
    console.log(formtypes);

    const functionCreateForm = function (formtypes) {
      const form = `<form style={{background:'grey'}}>
         <input type='${formtypes.firstnewselect}'/>
         </form>`;
      console.log(form);
      return { html: form };
    };
    const testSend = functionCreateForm(formtypes);
    console.log(testSend);
    res.sendStatus(200);
    res.json(testSend);
  } catch (error) {
    console.log(error);
  }
});

module.exports = testRouter;
