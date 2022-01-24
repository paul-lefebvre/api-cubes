const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init({
    not_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    entity_id: DataTypes.STRING,
    answers: DataTypes.STRING,
    readed: DataTypes.INTEGER,
    is_like: DataTypes.INTEGER,
    is_com: DataTypes.INTEGER,
    is_com_response: DataTypes.INTEGER,
    is_new_post: DataTypes.INTEGER,
    is_new_friend: DataTypes.INTEGER,
    is_invite_grp: DataTypes.INTEGER,
    is_new_msg: DataTypes.INTEGER,
    is_new_survey: DataTypes.INTEGER,
    fw_icon: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Notification;
};