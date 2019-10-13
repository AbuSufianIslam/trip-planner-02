const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const { db } = require('./models');

// logging and body-parsing
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// You'll of course want static middleware so your browser can request things
// like your 'index.html' and 'bundle.js'.
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require('./routes'));

// catch 404 (i.e., no route was hit) and forward to error handler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// handle any errors
app.use((req, res, next) => {
	console.error(err, err.stack);
	res.status(err.status || 500);
	//console.error(err);
	res.send('Something went wrong: ' + err.message);
});

// listen on a port
const PORT = 3000;

const init = async function() {
	//await db.sync()
	app.listen(PORT, function() {
		console.log(`Server is listening on port ${PORT}!`);
	});
};

init();
