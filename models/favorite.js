'use strict';
const {
  Model
} = require('DataTypes');
module.exports = (DataTypes, DataTypes) => {
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
      type: DataTypes.UUID,
      allowNull: false
    },    
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    DataTypes,
    modelName: 'Favorite',
  });
  Favorite.removeAttribute('id');
  return Favorite;
};