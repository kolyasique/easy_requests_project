'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Form, User }) {
      Site.hasMany(Form, { foreignKey: 'site_id' });
      Site.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Site.init({
    title: DataTypes.TEXT,
    web: DataTypes.TEXT,
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Users',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Site',
  });
  return Site;
};