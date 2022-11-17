/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('../Layout');


module.exports = function Secret() {
  return (
    <html lang="ru">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
      <title>
        САЙТ МИШИ
      </title>
    </head>
    <body>
      <div className="secretPage">
        <h1> MISHKA SALAMALEKUM</h1>
        <button id='corsbutton'> BUTTON</button>
        <div>
        <form name='sendform' id='7941427'><h2>27</h2><input type='text' name='name' placeholder='Введите имя'/><button type='submit' id='submit-form-creation' name='submit-btn'>Отправить</button> </form>        </div>
        <script defer src='/js/cors/cors.js'></script>
        </div>
        </body>
    </html>
    
  );
};