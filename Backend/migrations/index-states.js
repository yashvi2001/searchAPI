'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('covids',['state'])
  },
};