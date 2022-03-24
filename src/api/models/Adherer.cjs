const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Adherer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Adherer.belongsTo(models.User, {
        as: "adherants",
        foreignKey: "usr_id",
      });
      Adherer.belongsTo(models.Group, {
        as: "groupes",
        foreignKey: "grp_id",
      });
    }
  }
  Adherer.init(
    {
      usr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      grp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Adherer",
      tableName: "adherer",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return Adherer;
};
