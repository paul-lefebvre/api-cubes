const { Model, Deferrable } = require('sequelize');

import User from './User.cjs';
import Category from './Category.cjs';

module.exports = (sequelize, DataTypes) => {
  class Ressource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ressource.init({
    res_id: {
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
    cat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    answers: DataTypes.STRING,
    is_signaled: DataTypes.INTEGER,
    nb_views: DataTypes.INTEGER,
    nb_likes: DataTypes.INTEGER,
    nb_shares: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Ressource',
    tableName: 'ressources',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Ressource;
};