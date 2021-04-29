'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Favorites', {
      replyId: {
        type: Sequelize.UUID,
        allowNull: false
      },    
      userId: {
        type: Sequelize.UUID,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Favorites');
  }
};