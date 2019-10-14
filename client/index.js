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

const state = {
	attarcations: {},
	selectedAttractions: []
};

const buildAttraction = (category, attraction) => {
	//append in map
	const markerlocation = buildMarker(category, attraction.place.location);
	state.selectedAttractions.push({
		id: attraction.id,
		category
	});
	markerlocation.addTo(map);

	//Remove button
	const removeBtn = document.createElement('button');
	removeBtn.className = 'remove-btn';
	removeBtn.innerHTML = 'X';

	//append item to day
	const itineraryItem = document.createElement('li');
	itineraryItem.className = 'itinerary-item';

	itineraryItem.append(attraction.name, removeBtn); //itineraryItem.innerHTML = attraction.name
	// console.log(`${category}-list`, category);
	// console.log('itinerary', itineraryItem);
	document.getElementById(`${category}-list`).append(itineraryItem);
	//console.log('csdvun', new)

	//remove itinerary form list
	removeBtn.addEventListener('click', function remove() {
		removeBtn.removeEventListener('click', remove);
		state.selectedAttractions = state.selectedAttractions.filter((selected) => selectedId !== attraction.id);
	});

	//remove attraction from dom
	itineraryItem.remove();
	marker.remove();
};

const handleAddAttraction = (attractionType) => {
	const select = document.getElementById(`${attractionType}-choices`);
	const selectId = select.value;
	const selectedAttraction = state.attarcations[attractionType].find((attraction) => +attraction.id === +selectId);

	buildAttraction(attractionType, selectedAttraction);
};

const fetchAttractions = async () => {
	try {
		const res = await fetch('/api');
		//console.log('res data ', res);
		const data = await res.json();
		//console.log('data ', data);
		state.attarcations = data;
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

[ 'hotels', 'restaurants', 'activities' ].forEach((attraction) => {
	document.getElementById(`${attraction}-add`).addEventListener('click', () => handleAddAttraction(attraction));
});

fetchAttractions();
