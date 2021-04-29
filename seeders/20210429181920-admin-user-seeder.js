'use strict';

const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      username: 'mezie',
      email: 'chimezie@tutstack.io',
      password: await bcrypt.hash('password', 10),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
