////////////////////////
// Setup - Import deps and create app object
////////////////////////

const express = require("express") // importing express library
const morgan = require("morgan") // importing the morgan library
require("dotenv").config() // loads the variables in the .env into the process
const PORT = process.env.PORT // getting the port from our .env file
const app = express() // express application
const methodOverride = require("method-override") // import middleware for overriding puts and deletes
const allPokemon = require("./models/pokemon")


//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev")) // logging middleware
app.use( express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))


///////////////////////
// Declare Routes and Routers  INDUCES - Index, New, Delete, Update, Create, Edit, Show
///////////////////////

// Index - Get - List all Pokemon - /pokemon
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {allPokemon})
})

// New - Get - Show a form to make a new Pokemon - /pokemon/new
app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs")
})

// Destroy - Delete - Delete a Pokemon - /pokemon/:id
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id
    allPokemon.splice(id, 1)
    res.redirect('/pokemon')
})

// Update - Put - Update a Pokemon - /pokemon/:id
app.put('/pokemon/:id', (req, res) => {
    const id = req.params.id
    let updatedPokemon = {...allPokemon[id]}
    updatedPokemon.id = req.body.id
    updatedPokemon.name = req.body.name
    updatedPokemon.img = req.body.img
    let type = req.body.type;
	let typeArray = type.split(" ");
	updatedPokemon.type = typeArray;
    updatedPokemon.stats = {
		hp: req.body.hp,
		attack: req.body.attack,
	    defense: req.body.defense,
		spattack: req.body.spattack,
		spdefense: req.body.spdefense,
		speed: req.body.speed,
	};
    allPokemon[id] = updatedPokemon
    res.redirect('/pokemon')
})

// Create - Post - Create a Pokemon - /pokemon
app.post("/pokemon", (req, res) => {
    let newPokemon = {
        name: req.body.name,
        id: req.body.id,
        img: req.body.img
    }
    let type = req.body.type
    let typeArray = type.split(" ")
    newPokemon.type = typeArray
    newPokemon.stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed
    }
    allPokemon.unshift(newPokemon)
    res.redirect("/pokemon")
})

// Edit - Get - Render form to update a Pokemon - /pokemon/:id/edit
app.get('/pokemon/:id/edit', (req, res) => {
    const id = req.params.id
    const pokemon = allPokemon[id]
    res.render('edit.ejs', {pokemon, id})
})

// Show - Get - Show one Pokemon - /pokemon/:id
app.get('/pokemon/:id',  (req, res) => {
    const id = req.params.id;
    
    const pokemon =  allPokemon[id];
    
    res.render('show.ejs', {pokemon, id})
})


///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})