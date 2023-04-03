// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for fruit and structure our data
const logSchema = new Schema({
    title: { type: String, required: true},
    entry: { type: String },
    shipIsBroken: { type: Boolean, default: true }
},
{ timestamps: true }
)

// create our model using our fruitSchema and give our collection a name of "fruits"
const Log = mongoose.model('logs', logSchema) // the function takes two arguments. 1st argument is the database/collection and the 2nd is the blueprint will be using the pokemon model to interact with it 

// exporting the Fruit model as a module
module.exports = Log