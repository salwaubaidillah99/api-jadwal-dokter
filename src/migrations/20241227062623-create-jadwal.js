'use strict';

const { toDefaultValue } = require('sequelize/lib/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jadwals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dokterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dokters',
          key: 'id'
        }
      },
      day: {
        type: Sequelize.STRING
      },
      time_start: {
        type: Sequelize.TIME
      },
      time_finish: {
        type: Sequelize.TIME
      },
      quota: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      date_range: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        toDefaultValue: null
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jadwals');
  }
};