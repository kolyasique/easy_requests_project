'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Site}) {
      Form.belongsTo(Site, { foreignKey: 'site_id' });
    }
  }
  Form.init({
    name: DataTypes.TEXT,
    uni_key: DataTypes.TEXT,
    configuration: DataTypes.TEXT,
    site_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sites',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};