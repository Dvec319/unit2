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

app.get("/garen", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Fear is the first of many foes.</h1>
                <h2>Fear not, I'm coming.</h2>
                <h3>This world needs hope.</h3>
            </body>
        </html>
    `)
})

app.get("/burger", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Oh you want a bacon cheeseburger?</h1>
                <h2>Sorry we're out of bacon.</h2>
                <h3>And cheese.</h3>
                <h4>And burger.</h4>
                <h4>Look we're out of everything. We got no food.</h4>
                <h5> Go away.</h5>
            </body>
        </html>
    `)
})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log("Listening on port 3000")
})