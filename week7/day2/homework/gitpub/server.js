////////////////////////
// Setup - Import deps and create app object
////////////////////////

require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const PORT = process.env.PORT
const app = express()

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers
///////////////////////

///////////////////////////
// Server Listener
///////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
