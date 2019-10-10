// name
// cuisine (comma-delimited string list)
// price (integer from 1 to 5, for how many dollar signs)

const Sequelize = require('sequelize');
const db = require('./db');

const Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	}
});

Restaurant.beforeCreate((restaurant) => {
	restaurant.cuisine = restaurant.cuisine.split(' ').join(', ');
});

module.exports = Restaurant;
