// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our log routes
const logRoutes = require('./routes/logRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Connect our routes to our express app
app.use('/log', logRoutes)

// Setup a "new" route 
app.get('/log/new', (req, res) => {
    res.send('new')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})