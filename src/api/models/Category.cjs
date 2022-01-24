const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    cat_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    nb_posts: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Category;
};