const express = require('express');

const rendertemplate = require('../../utils/render/renderTemplateSTD');
const AuthError = require('../../views/auth/AuthError');

const authErrorRouter = express.Router();

authErrorRouter.get('/', (req, res) => {
  rendertemplate(AuthError, null, res);
});

module.exports = authErrorRouter;

