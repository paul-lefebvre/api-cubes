const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Relation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Relation.belongsTo(models.User, {
        as: "follower",
        foreignKey: "follower_id",
      });
      Relation.belongsTo(models.User, {
        as: "followed",
        foreignKey: "followed_id",
      });
    }
  }
  Relation.init(
    {
      rel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Relation",
      tableName: "relation",
      createdAt: "created_at",
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return Relation;
};
