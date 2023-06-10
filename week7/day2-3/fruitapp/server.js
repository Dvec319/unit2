////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const PORT = process.env.PORT // getting the port from out .env file
const app = express() // express application
const methodOverride = require("method-override") // import middleware for overriding for puts and deletes
const fruitsRouter = require("./controllers/fruits")


//////////////////////
// Declare Middleware (functions that run between the request and response)
//////////////////////

app.use(morgan("dev")) // sets up our logging middleware
app.use(express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended: false})) // middleware for parsing urlencoded
app.use(methodOverride("_method")) // method will be overridden when it sees a query string like ?_method="put"
app.use("/fruit", fruitsRouter) // use the fruitRouter for any urls that start with /fruit

///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})