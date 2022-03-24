const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.hasMany(models.Adherer,{
        as: 'adherants',
        foreignKey: 'grp_id',
      });
    }
  }
  Group.init({
    grp_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    owner: DataTypes.INTEGER,
    name: DataTypes.STRING,
    nb_users: DataTypes.INTEGER,
    is_private: DataTypes.INTEGER,
    description: DataTypes.STRING,
    invite_code: DataTypes.STRING,
    expire_code_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Group',
    tableName: 'groups',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Group;
};