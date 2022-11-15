/* eslint-disable react/prop-types */
const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link type="image/x-icon" href="/favicon/favicon.ico" rel="shortcut icon" />
        <link type="Image/x-icon" href="/favicon/favicon.ico" rel="icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>
          EasyForm
        </title>
      </head>
      <body>
        <Header />
        { children }
      </body>
    </html>
  );
};
