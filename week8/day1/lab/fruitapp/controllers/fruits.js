// import dependencies
const express = require("express") // express library
// const fruits = require("../models/fruits") // import fruits data
// because  the models/fruits is uppercase the variable should be uppercase
const Fruits = require("../models/fruits")

// create a router
const router = express.Router()

// Routes

// Index - Get - List all fruits - /fruits
router.get("/", async (req, res) => {
    // get the documents from the fruits collection
    // pass that into our render
    // this line calls the DB and looks for the Fruits model defined on model/fruits
    // '.find' method with empty brackets gets everything on from the fruits collection
    const fruits = await Fruits.find({})


    // render an ejs template with all the fruits
    res.render("fruits/index.ejs", {fruits})
})

// New - Get - Show a form to create a fruit
router.get("/new", (req, res) => {
    // render the new template
    res.render("fruits/new.ejs")
})

// Destroy - Delete - Delete a fruit
router.delete("/:id", (req, res) => {
  // grab the id from the url
  const id = req.params.id
  // splice the object out of the array
  fruits.splice(id, 1)
  // redirect user back to index
  res.redirect("/fruit")
})

// Update - Put - Update a fruit
router.put("/:id", (req, res) => {
    // get the id from the url
    const id = req.params.id
    // make sure readyToEat is a boolean
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    // swap the current version with the new version in the array
    fruits[id] = req.body
    // redirect the user back to the index page
    res.redirect("/fruit")
})

// Create - Post - Create a fruit
router.post("/", (req, res) => {
    // turn the ready to eat property into a boolean
    // expression ? True : False
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    // push the new fruit into the array
    fruits.push(req.body)
    // send user back to the index page
    res.redirect("/fruit")
})

// Edit - Get - Render form to update a fruit
router.get("/:id/edit", (req, res) => {
    // get the index of the specified fruit
    const id = req.params.id
    // get the fruit using the index
    const fruit = fruits[id]
    // render the template and pass the fruit and index
    res.render("fruits/edit.ejs", {fruit, id})
})


// Show - Get - Shows one fruit - /fruit/:id
router.get('/:id', (req, res) => {
	// grab the id from the url
	const id = req.params.id;
	// create a variable with the fruit specified
	const fruit = fruits[id];
	// render a template with the fruit
	res.render('fruits/show.ejs', {fruit, id});
});



// Export our router
module.exports = router