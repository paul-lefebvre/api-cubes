const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ressource extends Model {

    static associate(models) {
		Ressource.hasMany(models.Category, {
			as: 'categories',
			foreignKey: 'cat_id',
			onDelete: 'cascade',
			hooks: true
		});	
		Ressource.hasOne(models.User, {
			as: 'owners',
			foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
		});
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
		allowNull: false,
    },
    cat_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
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