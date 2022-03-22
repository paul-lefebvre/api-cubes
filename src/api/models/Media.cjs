const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		Media.hasOne(models.Ressource, {
			as: 'media',
			foreignKey: 'res_id',
			onDelete: 'cascade',
			hooks: true
		});
    }
  }
  Media.init({
    med_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
    },
    res_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
    },
    path: DataTypes.STRING,
    is_picture: DataTypes.INTEGER,
    is_gif: DataTypes.INTEGER,
    is_video: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Media',
    tableName: 'medias',
    createdAt: 'uploaded_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Media;
};