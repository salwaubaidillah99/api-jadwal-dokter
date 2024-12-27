'use strict';
const {
  Model,
  ENUM
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Pasien, { foreignKey: 'userId' });
      User.hasOne(models.Dokter, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: false,
    defaultScope: {
      attributes:
      {
        exclude: ['updatedAt']
      }
    }
  });
  return User;
};