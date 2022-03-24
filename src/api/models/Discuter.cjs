const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Discuter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Discuter.belongsTo(models.User, {
        as: "contacts",
        foreignKey: "usr_id",
      });
      Discuter.belongsTo(models.Conversation, {
        as: "conversations",
        foreignKey: "cvs_id",
      });
      
    }
  }
  Discuter.init(
    {
      usr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cvs_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Discuter",
      tableName: "discuter",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return Discuter;
};
