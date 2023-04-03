const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const logController = require('../controllers/logController')

// // Setup an "index" route for log and attaching it to router object
// router.get('/', (req, res) => { 
//     res.send('index')
// })

// // This call back function in lines 10-12 gets deleted 
// // (req, res) => {    
// //     res.send('index')
// // })

// // now it should just be line 20
// router.get('/', logController.index)

// // Setup a "show" route for logs and attaching it to router object
// router.get('/logs/:id', (req, res) => {
//     res.send(logs[req.params.id])
// })

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for logs, attach it to router along with the controller logic
router.get('/', logController.index)

// Setup a "new" route for creating log
router.get('/new', logController.new)

// Setup a "clear" route for removing all data from logs collection
router.delete('/clear', logController.clear)      

// Setup a "delete" route for removing a specific log
router.delete('/:id', logController.delete)

// Setup a "update" route for updating a specific log
router.put('/:id', logController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', logController.seed)          

// Setup a "create" route for adding log data
router.post('/', logController.create)

// Setup a "edit" route for editing a log
router.get('/:id/edit', logController.edit)

// // Setup an "show" route for logs, attach it to router along with the controller logic
router.get('/:id', logController.show)


module.exports = router