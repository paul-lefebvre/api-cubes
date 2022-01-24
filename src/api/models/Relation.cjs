const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Relation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relation.init({
    rel_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Relation',
    tableName: 'relations',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Relation;
};