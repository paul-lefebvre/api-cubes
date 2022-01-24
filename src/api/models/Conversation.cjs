const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversation.init({
    cvs_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    is_mute: DataTypes.INTEGER,
    last_msg: DataTypes.STRING,
    notify_conv: DataTypes.INTEGER,
    is_blocked: DataTypes.INTEGER,
    is_signaled: DataTypes.INTEGER,
    is_unread: DataTypes.INTEGER,
    last_msg_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: 'conversations',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Conversation;
};