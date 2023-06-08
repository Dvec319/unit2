////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const drinks = require("./models/drinks")

const PORT = process.env.PORT
const app = express()

//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev"))


///////////////////////
// Declare Routes and Routers
///////////////////////

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
