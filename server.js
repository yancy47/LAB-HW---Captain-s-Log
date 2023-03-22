// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our clothing data from models folder
const capris = require('./models/capris')
const dresses = require('./models/dresses')
const earings = require('./models/earings')
const hats = require('./models/hats')
const pants = require('./models/pants')
const robes = require('./models/robes')
const shirts = require('./models/shirts')
const shoes = require('./models/shoes')
const socks = require('./models/socks')


// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load our fruit routes
const fruitRoutes = require('./routes/fruitRoutes')