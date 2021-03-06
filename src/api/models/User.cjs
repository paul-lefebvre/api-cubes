const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		// define association here
		User.hasMany(models.Relation, {
			as: 'abonnements',
			foreignKey: 'follower_id',
			onDelete: 'cascade',
			hooks: true
    });
      
		User.hasMany(models.Relation, {
			as: 'abonnes',
			foreignKey: 'followed_id',
			onDelete: 'cascade',
			hooks: true
    });
      
		User.hasMany(models.Participer, {
			as: 'participants',
      foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
    });
      
		User.hasMany(models.Adherer, {
			as: 'adherants',
      foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
    });
      
    User.hasMany(models.Discuter, {
			as: 'contacts',
      foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
		});
		
		User.hasMany(models.Like, {
			as: 'likes',
			foreignKey: 'usr_id',
			onDelete: 'cascade',
			hooks: true
		});

    User.hasMany(models.Ressource, {
			as: "publications",
			foreignKey: "usr_id",
		});
		
		User.belongsTo(models.Ressource, {
			as: "resOwner",
			foreignKey: "usr_id",
		});
		
		User.belongsTo(models.Survey, {
			as: "surveyOwner",
			foreignKey: "usr_id",
		});
		
    }
  }
  User.init(
    {
      usr_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pseudo: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      tel: DataTypes.STRING,
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
      roles: DataTypes.TEXT,
      status: DataTypes.INTEGER,
      last_con: DataTypes.DATE,
      reset_code: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      gender: DataTypes.INTEGER,
      is_online: DataTypes.INTEGER,
      actual_lat: DataTypes.DECIMAL,
      actual_long: DataTypes.DECIMAL,
      bio: DataTypes.STRING,
      avatar_img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return User;
};
