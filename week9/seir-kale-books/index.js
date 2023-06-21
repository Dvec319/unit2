////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config();

const express = require('express');
const morgan = require('morgan')
const Book = require("./models/book")

const app = express();

//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan('dev'))

///////////////////////
// Declare Routes and Routers
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/books', async (req, res) => {
    // get all the books from the mongo db and render index.ejs
    const allBooks = await Book.find({});

    res.render("index.ejs", {books: allBooks});
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(process.env.PORT,
    () => console.log(`listening on port ${process.env.PORT}`)
);
