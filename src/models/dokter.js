'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokter.hasMany(models.Jadwal, {
        foreignKey: 'dokterId', as: 'jadwal'
      });
    }
  }
  Dokter.init({
    name: DataTypes.STRING,
    specialization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};