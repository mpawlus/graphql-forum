'use strict';

const bcrypt = require('bcrypt')
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('graphql-forum', 'root', 'admin', { host: 'localhost', dialect: 'mysql' });

module.exports = (DataTypes, DataTypes2) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Thread);
      User.hasMany(models.Reply);
    }
  };
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.ENUM('ADMIN', 'USER'),
      allowNull: false,
      defaultValue: 'USER'
    },
    avatar: {
      type: Sequelize.STRING
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
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10)
  })

  return User;
};