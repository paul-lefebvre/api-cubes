const { Model, Deferrable } = require('sequelize');

import Survey from './Survey.cjs';

module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Response.init({
    rep_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    srv_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Survey,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    answers: DataTypes.STRING,
    usr_answer_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Response',
    tableName: 'responses',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Response;
};