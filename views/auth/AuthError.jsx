/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('../Layout');

module.exports = function AuthError() {
  return (
    <Layout>
      <div className="central-form-div">
        <h1>Эта страница доступна только авторизованным пользователям</h1>
        <a href="/login"> Войти</a>
        <a href="/registration"> Зарегистрироваться</a>
        <form action='/grf' method='POST'>
<h2>Оставить отзыв</h2>
<input type='text' name='name' placeholder='Введите имя'/>
<p><textarea rows="10" cols="45" name="text"></textarea></p>
<button type='submit' id='submit-form-creation' name='submit-btn'>Отправить</button> </form>
      </div>
    </Layout>
  );
};
