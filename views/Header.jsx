/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function Header() {
  return (
    <div id="header-all">
      <img src="/logo/logo.png" id="logo"></img>

   
      <div id="header-menu">
        <a href="/" className='menu-button'>Кнопка1</a>

       <a href="/" className='menu-button'>Кнопка2</a>

       <a href="/" className='menu-button'>Кнопка3</a>

        <a href="/login/logout" className='menu-button'>Выйти</a>
      </div>
      </div>

  );
};
