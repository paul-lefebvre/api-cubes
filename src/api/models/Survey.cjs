const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		// define association here
		Survey.hasMany(models.Response,{
			as: 'surveyResponses',
			foreignKey: 'srv_id',
			onDelete: 'cascade',
			hooks: true
		})
		
		Survey.hasOne(models.User,{
			as: 'surveyOwner',
			foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
		})
		
    }
  }
  Survey.init({
	srv_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
    },
    usr_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    questions: DataTypes.TEXT,
    which_group: DataTypes.INTEGER,
    is_private_group: DataTypes.INTEGER,
    nb_views: DataTypes.INTEGER,
    nb_likes: DataTypes.INTEGER,
    nb_shares: DataTypes.INTEGER,
    start_at: DataTypes.DATE,
    end_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Survey',
    tableName: 'surveys',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Survey;
};