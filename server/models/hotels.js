const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT,
		Validate: {
			max: 5,
			min: 1
		}
	},
	amenities: {
		type: Sequelize.STRING
	}
});

Hotel.beforeCreate((hotel) => {
	hotel.amenities = hotel.amenities.split(' ').join(', ');
});

module.exports = Hotel;
