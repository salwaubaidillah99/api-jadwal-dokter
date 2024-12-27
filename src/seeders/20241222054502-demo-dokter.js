'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dokters', [
      {
        name_dokter: 'Dr. Andi Irawan',
        specialization: 'Dokter Umum',
        userId: 4,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        name_dokter: 'Dr. Siti Halifah',
        specialization: 'Dokter Gigi',
        userId: 5,
        createdAt: new Date(),
        updatedAt: null,
      },
      {
        name_dokter: 'Dr. Budi Pratama',
        specialization: 'Dokter Spesialis Jantung',
        userId: 6,
        createdAt: new Date(),
        updatedAt: null,
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
