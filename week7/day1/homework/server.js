////////////////////////
// Setup - Import deps and create app object
////////////////////////

const express = require("express")

const app = express()

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers
///////////////////////

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger.")
})

app.get("/greeting/:name", (req, res) => {
    // res.send("Hello, stranger.")
    const name = req.params.name
    res.send(`Oh, hey there ${name}! Good to see you.`)
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log("Listening on port 3000")
})