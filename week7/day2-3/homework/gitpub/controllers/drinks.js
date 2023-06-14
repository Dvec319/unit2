// importing dependencies
const express = require('express');
const drinks = require('../models/drinks');

// creating a router
const router = express.Router();

// Routes

router.get('/:id', (req, res) => {
	// grab the id from the url
	const id = req.params.id;
	// create a variable with the drink specified
	const drink = drinks[id];
	// render a template with the drink
	res.render('drinks/show.ejs', {drink, id});
});

// Export our router
module.exports = router;
