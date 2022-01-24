const { Model, Deferrable } = require('sequelize');

import Ressource from './Ressource.cjs';

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    com_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    res_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Ressource,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    answers: DataTypes.STRING,
    id_owner: DataTypes.INTEGER,
    is_response: DataTypes.INTEGER,
    id_response_to_sr: DataTypes.INTEGER,
    is_signaled: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Comment;
};