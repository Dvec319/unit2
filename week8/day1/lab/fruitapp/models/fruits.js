// // Model
// // Fruit {name: STRING, color: STRING, readToEat: BOOLEAN}
// const fruits = [
// 	{ name: 'Banana', color: 'Yellow', readyToEat: false },
// 	{ name: 'Orange', color: 'Orange', readyToEat: false },
// 	{ name: 'Strawberry', color: 'Red', readyToEat: true },
// ];

// // send the data out of this file (export it)
// module.exports = fruits

//===== Using the mongo db =====//

// import the connection file
const mongoose = require("./connection")

// the variable holds a schema
const fruitSchema = new mongoose.Schema({
	name: String,
	color: String,
	readyToEat: Boolean
})

// now that we have a schema (properties and data type directions for the db), we want to create a model to be passed into out db
// the variable should be capitalized by convention
// the 'fruit' is the name of the collection
// the fruitSchema is the direction or the SCHEMA of the object that will be passed into the collection

const Fruits = mongoose.model('fruit', fruitSchema)

module.exports = Fruits;