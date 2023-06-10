// importing dependencies
const express = require("express")
const foods = require("../models/food")

// creating a router
const router = express.Router()

// Routes

router.get('/:id', (req, res) => {
	// grab the id from the url
	const id = req.params.id;
	// create a variable with the food specified
	const food = foods[id];
	// render a template with the food
	res.render('foods/show.ejs', {food, id});
});



// Export our router
module.exports = router