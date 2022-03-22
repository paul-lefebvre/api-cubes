const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.belongsTo(models.Ressource, {
        as: "category",
        foreignKey: "cat_id",
      });
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