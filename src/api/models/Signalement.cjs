const { Model, Deferrable } = require('sequelize');

import User from './User.cjs';

module.exports = (sequelize, DataTypes) => {
  class Signalement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Signalement.init({
    sig_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    usr_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    usr_signaled_id: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    file: DataTypes.STRING,
    answers: DataTypes.STRING,
    reason: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Signalement',
    tableName: 'signalements',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Signalement;
};