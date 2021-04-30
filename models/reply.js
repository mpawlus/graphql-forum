'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('graphql-forum', 'root', 'admin', { host: 'localhost', dialect: 'mysql' });

module.exports = (DataTypes, DataTypes2) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsTo(models.User, { foreignKey: 'userId' });
      Reply.belongsTo(models.Thread, { foreignKey: 'threadId' });
    }
  };
  Reply.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    threadId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    isBestAnswer: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    modelName: 'Reply',
  });
  return Reply;
};