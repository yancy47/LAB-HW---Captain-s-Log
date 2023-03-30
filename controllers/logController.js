const logs = require('../models/logs')

// GET /logs/new
module.exports.new = (req, res) => {
    res.render('logs/New')
}