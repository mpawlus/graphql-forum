'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('graphql-forum', 'root', 'admin', { host: 'localhost', dialect: 'mysql' });

module.exports = (DataTypes, DataTypes2) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Favorite.init({
    replyId: {
      type: Sequelize.UUID,
      allowNull: false
    },    
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  Favorite.removeAttribute('id');
  return Favorite;
};