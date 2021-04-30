'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('graphql-forum', 'root', 'admin', { host: 'localhost', dialect: 'mysql' });

module.exports = (DataTypes, DataTypes2) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Thread.belongsTo(models.User, { foreignKey: 'userId' });
      Thread.hasMany(models.Reply);
      Thread.belongsTo(models.Channel, { foreignKey: 'channelId' });
    }
  };
  Thread.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    channelId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('UNSOLVED', 'SOLVED'),
      allowNull: false,
      defaultValue: 'UNSOLVED'
    },
    isLocked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    lastRepliedAt: {
      type: Sequelize.DATE,
      allowNull: false
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
    modelName: 'Thread',
  });
  return Thread;
};