const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		Like.belongsTo(models.User,{
			as: 'likes',
			foreignKey: 'usr_id',
		});
    }
  }
  Like.init({
    lik_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
    },
    usr_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
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