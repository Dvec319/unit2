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

// Greetings
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger.")
})

app.get("/greeting/:name", (req, res) => {
    // res.send("Hello, stranger.")
    const name = req.params.name
    res.send(`Oh, hey there ${name}! Good to see you.`)
})

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {

    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    res.send(`Your tip will be $${total * (.01 * tipPercentage)}.`)
    
})

// Magic 8 Ball
app.get("/magic/:phrase", (req, res) => {
    const phrase = req.params.phrase
    const arr = [
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes definitely',
			'You may rely on it',
			'As I see it yes',
			'Most likely',
			'Outlook good',
			'Yes',
			'Signs point to yes',
			'Reply hazy try again',
			'Ask again later',
			'Better not tell you now',
			'Cannot predict now',
			'Concentrate and ask again',
			"Don't count on it",
			'My reply is no',
			'My sources say no',
			'Outlook not so good',
			'Very doubtful',
		];
    const eightBallResponse = arr[Math.floor(Math.random() * arr.length)]
    res.send(`
        <h1>${phrase}?</h1>
        <h1>${eightBallResponse}.</h1>
    `)

})

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log("Listening on port 3000")
})