const { Model, Deferrable } = require('sequelize');

import User from './User.cjs';

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init({
    lik_id: {
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
    entity_id: DataTypes.INTEGER,
    is_post: DataTypes.INTEGER,
    is_event: DataTypes.INTEGER,
    is_survey: DataTypes.INTEGER,
    is_comment: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'likes',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Like;
};