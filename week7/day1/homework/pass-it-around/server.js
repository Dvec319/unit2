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

app.get("/", (req, res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall.</h1>
        <a href="/98">take one down, pass it around</a>
    `);
})

app.get("/:number_of_bottles", (req, res) => {
    let number = req.params.number_of_bottles
    if (number > 0) {
        res.send(`
            <h1>${number} Bottles of beer on the wall.</h1>
            <a href="${number - 1}">take one down, pass it around</a>
        `);
    } else {
        res.send(`
            <h1>0 Bottles of beer on the wall.</h1>
            <a href="/">Start over</a>
        `);
    }
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log("Listening on port 3000")
})