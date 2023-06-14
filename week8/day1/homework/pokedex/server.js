////////////////////////
// Setup - Import deps and create app object
////////////////////////

const express = require("express") // importing express library
const morgan = require("morgan") // importing the morgan library
require("dotenv").config() // loads the variables in the .env into the process
const PORT = process.env.PORT // getting the port from our .env file
const app = express() // express application
const allPokemon = require("./models/pokemon")


//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev")) // logging middleware
app.use(express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended: false}))


///////////////////////
// Declare Routes and Routers  INDUCES - Index, New, Delete, Update, Create, Edit, Show
///////////////////////

// Index - Get - List all Pokemon - /pokemon
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {allPokemon})
})

// Show - Get - Show one Pokemon - /pokemon/:id
app.get('/:id', (req, res) => {
    const id = req.params.id;
    
    const pokemon = allPokemon[id];
    
    res.render('show.ejs', {pokemon, id})
})


///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})