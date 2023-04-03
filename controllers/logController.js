const Log= require('../models/logs')
const logs= require('../models/log')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
    // console.log('GET /logs')
    // res.send('index')
    // Looks in the views folder for "logs/Index" and passes { logs } data to the view (kind of like a server props object)
    // res.render('logs/Index', { logs: logs }) //  { logs } this is passed as props to index 

    try{
    const logs = await Log.find()
    // console.log('inside controller')
    res.render('logs/Index', { logs: logs })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
module.exports.show = async(req, res) => { 
    // console.log('GET /logs/:id')
    // res.send('show')
    // res.render('logs/Show', { log: logs[req.params.index]}) // 2nd argument is passing an object. created a log property and it's coming from logs[req.params.index]  
    // res.render('logs/Show', { log: logs[req.params.id]}) // changed to id then line 30 
    // console.log(req.params.id) // this will display the id 

    // if (req.body.shipIsBroken) {
    //     req.body.shipIsBroken = true
    // } else {
    //     req.body.shipIsBroken = false
    // }

    try{
    const log = await Log.findById(req.params.id)
    // const date = log.createdAt.toString().slice(0, 7) // Date
    res.render('logs/Show', { log }) // may need to be { log , date })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// GET /logs/new
module.exports.new = (req, res) => {
    // res.send('new')
    res.render('logs/New')
  
}

// POST /logs 
module.exports.create= async(req,res) => {
    // console.log('POST /logs/')
    console.log(req.body) 
    // res.send('received')
    // res.send(req.body)
    // logs.push(req.body) // not sure if this is even needed 

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    // res.redirect('/logs/:id')

    try {
        const result = await Log.create(req.body)
        console.log(result)
    }catch(err){
        console.log('error is' ,err)
    }

    res.redirect('/logs')
    
    }

 // POST /logs/seed
module.exports.seed = async (req, res) => {
    // console.log('POST /logs/seed')
    try {
        await Log.deleteMany({}) 
        await Log.create(logs)  // 1:14:55 passing fruits array line 1
        res.redirect('/logs') // 1:16/01 redirect to the index view. The seed button is on the index, but i'll redirect, anyway, so that the page refreshes and catches the data again.  Because we're making updates to the data. We're first deleting it. then creating it. So I want to get the latest version of the data. So we direct to the same page.
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}   
   
//DELETE /logs/:id  (show)
module.exports.delete = async (req, res) => {
    //  console.log('DELETE /logs/:id')               
    //  res.send('deleted succesfully')
    //  res.redirect('/logs') 

     try {
        await Log.findByIdAndDelete(req.params.id) 
        res.redirect('/logs') 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /logs/:id/edit
module.exports.edit = async (req, res) => {
    // console.log('GET /logs/:id/edit')
    // let index = logs.findById(req.params.id) 
    // res.render('logs/Edit', { log: log[index] })  
    try {
      const log = await Log.findById(req.params.id)
      res.render('logs/Edit', { log: log})      
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

// PUT /logs/:id
module.exports.update =async (req, res) => {
    // console.log('PUT /logs/:id')
    console.log(req.body) 

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

   
    try{
        //  pass the id to find the document in the db and the form data (req.body) to update it
        await Log.findByIdAndUpdate(req.params.id, req.body) 
        res.redirect('/logs/')
    } catch(err){
        console.log(err)
        res.send(err.message)
    }   
}


// DELETE /logs/clear (index)
module.exports.clear = async (req, res) => {

    try {
        await Log.deleteMany({})
        res.redirect('/logs')        
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
    

    // module.exports = { index }  // not needed anymore 