////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const drinks = require("./models/drinks") // return whatever drinks.js exports

const PORT = process.env.PORT // getting the port from our .env file
const app = express() // express application

//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev")) // sets up our logging middleware
app.use(express.static("public")) // treat the public folder as a static file server


///////////////////////
// Declare Routes and Routers
///////////////////////

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// Index - Get - Lists all the drinks - /drinks
app.get("/drinks", (req, res) => {
    // render an ejs template with all the drinks
    res.render("index.ejs", {drinks})
})

// Show - Get - Shows one drink - drinks/:id
app.get("/drinks/:id", (req, res) => {
    // grab the id from the url
    const id = req.params.id
    // create a variable with the fruit specified
    const drink = drinks[id]
    // render a template with the fruit
    res.render("show.ejs", {drink})
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
