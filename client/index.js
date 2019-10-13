const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWJ1c3VmaWFuaXNsYW0iLCJhIjoiY2swenN4YWlnMHM5ajNsbzV2NHEyM3FncSJ9.wKxlavfgHkP0fPU5tHJThA';
const fullstackCoords = [ -74.009, 40.705 ]; // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
	container: 'map',
	center: fullstackCoords, // FullStack coordinates
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);

//select attarcation and make an optipn for each case
const makeOption = (attraction, selector) => {
	const option = new Option(attraction.name, attraction.id);
	const select = document.getElementById(selector);
	select.add(option);
};

const fetchAttractions = async () => {
	try {
		const res = await fetch('/api');
		//console.log('res data ', res);
		const data = await res.json();
		//console.log('data ', data);
		const { hotels, activities, restaurants } = data;
		hotels.forEach((hotel) => {
			makeOption(hotel, 'hotels-choices');
		});
		activities.forEach((activity) => {
			makeOption(activity, 'activities-choices');
		});
		restaurants.forEach((restaurant) => {
			makeOption(restaurant, 'restaurants-choices');
		});
	} catch (error) {
		console.error(error);
	}
};

fetchAttractions();
