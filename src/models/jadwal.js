'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jadwal.belongsTo(models.Dokter, {
        foreignKey: 'dokterId',
      });
    }
  }
  Jadwal.init({
    dokterId: DataTypes.INTEGER,
    day: DataTypes.STRING,
    time_start: DataTypes.TIME,
    time_finish: DataTypes.TIME,
    quota: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    date_range: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jadwal',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: false,
  });
  return Jadwal;
};