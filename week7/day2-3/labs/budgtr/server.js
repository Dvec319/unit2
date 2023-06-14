////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config() // loads the variables in the .env into the process env object
const express = require("express") // importing express library
const morgan = require("morgan") // importing morgan library
const PORT = process.env.PORT // getting the port out of the env file
const app = express()
const budget = require("./models/budget")



//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev")) // logging middleware
app.use(express.static("public")) // treat public folder as a static file

///////////////////////
// Declare Routes and Routers
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

// Index - Get - List budget data - /budgets
app.get("/budgets", (req, res) => {
    res.render("index.ejs")
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`)
})
