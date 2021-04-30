'use strict';
const {
  Model
} = require('DataTypes');
module.exports = (DataTypes, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
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
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    threadId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    isBestAnswer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    DataTypes,
    modelName: 'Reply',
  });
  return Reply;
};