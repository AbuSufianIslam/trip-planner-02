const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./places');
const Restaurant = require('./restaurants');
const Activity = require('./activities');
const Hotel = require('./hotels');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	db,
	Place,
	Hotel,
	Activity,
	Restaurant
};
