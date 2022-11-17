/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('../Layout');


module.exports = function Secret() {
  return (
    <Layout>
      <div className="secretPage">
        <h1> MISHKA SALAMALEKUM</h1>
        <button id='corsbutton'> BUTTON</button>
        <script defer src="/js/cors/cors.js" />
        <div>
        <form action='/grf' method='POST'><h2>Данные для отправки</h2><input type='text' name='name' placeholder='Введите имя'/><input type="tel" id="phone" name="phone" pattern="7([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}"/><button type='submit' id='submit-form-creation' name='submit-btn'>Отправить</button> </form>
        </div>
      </div>

    </Layout>
  );
};