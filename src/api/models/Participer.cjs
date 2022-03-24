const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Participer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Participer.belongsTo(models.User, {
        as: "participants",
        foreignKey: "usr_id",
      });
      Participer.belongsTo(models.Event, {
        as: "events",
        foreignKey: "evt_id",
      });
    }
  }
  Participer.init(
    {
      usr_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      evt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Participer",
      tableName: "participer",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return Participer;
};
