'use strict';

const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Channels', [{
      id: uuidv4(),
      name: 'General',
      slug: 'general',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'AdonisJs',
      slug: 'adonisjs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Vue',
      slug: 'vue',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Channels', null, {});
  }
};
