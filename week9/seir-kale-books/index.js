////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config();

const express = require('express');
const morgan = require('morgan')
const methodOverride = require('method-override')
const Book = require("./models/book")

const app = express();

//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) // whenever form data is involved we need this middleware
app.use(methodOverride("_method"))

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

app.get('/books/new', (req, res) => {
    res.render("new.ejs")
})

app.post('/books', async (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true
    } else {
        req.body.completed = false
    }
    await Book.create(req.body)
    res.redirect('/books')
})

app.get('/books/:id', async (req, res) => {
    const foundBook = await Book.findById(req.params.id)

    res.render('show.ejs', {book: foundBook})
})

app.delete("/books/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect("/books")
})

app.get('/books/:id/edit', async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.render("edit.ejs", {book})

})

app.put('/books/:id', async (req, res) => {
    if (req.body.completed === 'on') {
		req.body.completed = true;
	} else {
		req.body.completed = false;
	}

    await Book.findByIdAndUpdate(req.params.id, req.body)

    res.redirect('/books')
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(process.env.PORT,
    () => console.log(`listening on port ${process.env.PORT}`)
);
