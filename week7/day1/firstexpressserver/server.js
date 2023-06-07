// Import your dependencies
const express = require("express") // require returns the specified external dependency

// Create an express application object
const app = express()

// Routes = Menu Items, possible requests your server can respond to
// app.method("/url"(req, res) => {})
// req = request object (details about the request)
// res = response object (has functions for sending response)
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/bigcheese", (req, res) => {
    const cheese = req.query.cheese
    const bread = req.query.bread
    const vegetable = req.query.vegetable
    res.send(`<h1>You are eating ${cheese}, ${bread}, and ${vegetable}</h1>`)
})

// using URL params (:params)
app.get("/bread/:type", (req, res) => {
    console.log(req.params) // req.params = url params
    res.send(req.params)
})

app.get("/list/:id", (req, res) => {
    const arr = ["Alex", "Winston", "David", "Kyle"]
    const id = req.params.id
    res.send(`<h1>${arr[id]}</h1>
        <h2>This person is a ${parseInt(id) % 2 === 0 ? "IL" : "IA"}</h2>
    `)
})


// turn on server so it listens for requests
// you can turn the server off with CTRL+C
app.listen(3000, () => {
    console.log("Listening on port 3000")
})