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

// New - Get - Show a form to make a new Pokemon
app.get('/pokemon/new', (req, res) => {
    res.render("new.ejs")
})

// Destroy - Delete - Delete a Pokemon

// Update - Put - Update a Pokemon

// Create - Post - Create a Pokemon
app.post("/pokemon", (req, res) => {
    allPokemon.push(req.body)
    res.redirect("/pokemon")
})

// Edit - Get - Render form to update a Pokemon

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