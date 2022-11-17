'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Site}) {
      User.hasMany(Site, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
    name: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    email: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};