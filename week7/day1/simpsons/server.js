////////////////////////
// Setup - Import deps and create app object
////////////////////////

const express = require("express")

const app = express()

//////////////////////
// Declare Middleware
//////////////////////

// app.use(req, res, next)

///////////////////////
// Declare Routes and Routers
///////////////////////

app.get("/homer", (req, res) => {
    res.send("Mmmmmm, Duff beer.")
})

app.get("/marge", (req, res) => {
    res.send("Homie!")
})

app.get("/bart", (req, res) => {
    res.send("Eat my shorts.")
})

app.get("/lisa", (req, res) => {
    res.send("Does it make you feel superior to tear down people's dreams?")
})

app.get("/maggie", (req, res) => {
    res.send("*Binky Sounds* ...")
})

app.get("/snowball-two", (req, res) => {
    res.send("Meow")
})

app.get("/santas-little-helper", (req, res) => {
    res.send("Woof")
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
