// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8092

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load our log routes
const logRoutes = require('./routes/logRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

// // Load the body-parser middleware
// const bodyParser = require('body-parser')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))  

// // hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method')) 

// look for static files (like css) in the public folder
app.use(express.static('public'))


// create a custom middleware for logging the HTTP Method and path 
app.use((req, res, next) => {             
    console.log(`${req.method} ${req.path}`)
    next()   //cousin 
})

// Connect our routes to our express app
app.use('/logs', logRoutes)


// app.use(bodyParser('body-parser')) 








// Connect our routes to our express app
app.use('/logs', logRoutes)

// moved this to logRoutes.js 
// Setup an "index" route for logs
// app.get('/logs', (req, res) => {
//     res.send('index')
// })

// moved this to logRoutes.js too
// // Setup a "show" route for logs
// app.get('/logs/:id', (req, res) => {
//     res.send(logs[req.params.id])
// })

// Setup a "new" route 
// app.get('/logs/new', (req, res) => {
//     res.send('new')
// })

// // Setup a "create" route 
// app.get('/logs/', (req, res) => {
//     res.send('received')
// })

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

/*
NOTES
npm install body-parser
npm i
npm init -y
npm i dotenv
npm i express 
npm i react
npm install jsx-view-engine react react dom 
npm install method-override
*/