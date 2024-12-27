'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pasien.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Pasien.init({
    nama_pasien: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pasien',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    defaultScope: {
      attributes:
      {
        exclude: ['updatedAt']
      }
    }
  });
  return Pasien;
};