'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('graphql-forum', 'root', 'admin', { host: 'localhost', dialect: 'mysql' });

module.exports = (DataTypes, DataTypes2) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.hasMany(models.Thread);
    }
  };
  Channel.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};