const express = require('express');
const router = express.Router();
const { Hotel, Restaurant, Place, Activity } = require('../models');

router.get('/api', async (req, res, next) => {
	const allAttractions = {};
	try {
		allAttractions.hotels = await Hotel.findAll({
			include: [ { model: Place } ]
		});
		allAttractions.restaurants = await Restaurant.findAll({
			include: [ { model: Place } ]
		});
		allAttractions.activities = await Activity.findAll({
			include: [ { model: Place } ]
		});

		res.json(allAttractions);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
