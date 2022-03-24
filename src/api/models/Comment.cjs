const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		Comment.belongsTo(models.Ressource,{
			as: 'comments',
			foreignKey: 'res_id'
		});
    }
  }
  Comment.init({
    com_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
    },
    res_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
    },
    answers: DataTypes.STRING,
    id_owner: DataTypes.INTEGER,
    is_response: DataTypes.INTEGER,
    id_response_to_usr: DataTypes.INTEGER,
    is_signaled: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Comment;
};