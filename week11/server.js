// commonjs: const express = require("express");
// ES6: import express from "express";
import express from "express";
import dotenv from "dotenv";
// importing from export default
import cheese from "./exportOneThing.js";
// importing from named exports
import {bread, vegetable, fruit} from "./exportManyThings.js";
dotenv.config();

// create express application
const app = express();

// create a simple route
app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/cheese/:cheese', cheese)

app.get('/bread', bread);
app.get('/vegetable', vegetable);
app.get('/fruit', fruit);

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})