// Foundation
const express = require('express')
const app = express()
const port = 3000

// Route handlers
app.get('/', function(req, res){
    res.send('I am the root route')
})


app.get('/bank/:name/account/:dollars', (req, res)=>{
    let {name, dollars} = req.params
    let message = dollars >= 100 ? 
        `Can I borrow $${dollars/2}?`
        : `Are you living on the edge?`
      res.send(`Hello ${name}. ${message}`)
})


// Listeners
app.listen(port, function(){
    console.log('App running on port 3000.')
}) 