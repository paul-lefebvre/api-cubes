const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		Event.hasMany(models.Participer,{
      as: 'participants',
			foreignKey: 'evt_id',
		});
    }
  }
  Event.init({
    evt_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    owner: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    nb_users: DataTypes.INTEGER,
    max_users: DataTypes.INTEGER,
    actual_jackpot: DataTypes.DECIMAL,
    max_jackpot: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    start_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    createdAt: 'created_at',
    updatedAt: false,
    freezeTableName: true,
  });
  return Event;
};