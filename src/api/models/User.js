import { sequelize } from '../db';
const { DataTypes, Model } = require('sequelize');

export default class User extends Model {}

User.init({

  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  }

}, {
  sequelize,
  modelName: 'User'
});