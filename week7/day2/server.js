////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const fruits = require("./models/fruits") // return whatever fruits.js exports

const PORT = process.env.PORT // getting the port from out .env file
const app = express() // express application


//////////////////////
// Declare Middleware (functions that run between the request and response)
//////////////////////

app.use(morgan("dev")) // sets up our logging middleware
app.use(express.static("public")) // treat the public folder as a static file server




///////////////////////
// Declare Routes and Routers
///////////////////////


// Index - Get - List all fruits - /fruits
app.get("/fruit", (req, res) => {
    // render an ejs template with all the fruits
    res.render("index.ejs", {fruits})
})

// Show - Get - Shows one fruit - /fruit/:id
app.get("/fruit/:id", (req, res) => {
    // grab the id from the url
    const id = req.params.id
    //create a variable with the fruit specified
    const fruit = fruits[id]
    // render a template with the fruit
    res.render("show.ejs", {fruit})
})


///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})