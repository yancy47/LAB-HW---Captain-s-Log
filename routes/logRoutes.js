const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const logController = require('../controllers/logController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for logs, attach it to router along with the controller logic
router.get('/', logController.index)

// Setup a "new" route for creating log
router.get('/new', logController.new)

// Setup a "clear" route for removing all data from logs collection
router.delete('/clear', logController.clear)      // 1:23:26 // the more specific routes should be above.     '/:id'   is not specific b/c it could be    '/clear'  the URL param  handles any case, right? that's why we put this "clear" route above it 

// Setup a "delete" route for removing a specific log
router.delete('/:id', logController.delete)

// Setup a "update" route for updating a specific log
router.put('/:id', logController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', logController.seed)          // 1:10:10

// Setup a "create" route for adding log data
router.post('/', logController.create)

// Setup a "edit" route for editing a log
router.get('/:id/edit', logController.edit)

// Setup an "show" route for logs, attach it to router along with the controller logic
router.get('/:id', logController.show)


module.exports = router