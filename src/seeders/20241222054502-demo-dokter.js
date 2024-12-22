'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dokters', [
      {
        name: 'Dr. Andi',
        specialization: 'Dokter Umum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dr. Siti',
        specialization: 'Dokter Gigi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dr. Budi',
        specialization: 'Dokter Spesialis Jantung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Dokters', null, {});

  }
};
