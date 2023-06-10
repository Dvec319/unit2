////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const drinks = require("./models/drinks") // return whatever drinks.js exports
const foods = require('./models/food')
const PORT = process.env.PORT // getting the port from our .env file
const app = express() // express application
const foodRouter = require("./controllers/food")
const drinkRouter = require("./controllers/drinks")



//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev")) // sets up our logging middleware
app.use(express.static("public")) // treat the public folder as a static file server
app.use("/food", foodRouter)
app.use("/drinks",drinkRouter)


///////////////////////
// Declare Routes and Routers
///////////////////////

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to the Gitpub App! Not much to see here though.</h1>
    <a href="/drinks&foods"> You should probably click right here!</a>
    `)
})

// Index - Get - Lists all the drinks - /drinks
app.get("/drinks&foods", (req, res) => {
    // render an ejs template with all the drinks
    res.render("index.ejs", {drinks, foods})
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
