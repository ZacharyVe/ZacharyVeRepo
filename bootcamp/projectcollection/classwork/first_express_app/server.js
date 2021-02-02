//foundation
const express = require('express')
const app = express()
const port = 3000

//route handelers
app.get('/', function(req, res){
  // console.log(res);
     //root route
     // all of these res. commands end request response cycle
  res.send('I am the root route');
  // res.end()
  // res.render()
  // res.json()
})

// app.get('/Kiwi', function(req,res){
//   res.send('I Like Kiwis')
// })


// app.get('/strawberries', function(req,res){
//   res.send('I Like Strawberries')
// })

// // catchall argument must be at the end or it will be seen first and ignore the others.
// app.get('*', function(req,res){
//   res.send('I like foods')
// })

app.get('/:animal', function(req,res){
  console.log(req.params.animal)
  res.send('I like ' + req.params.animal)
})
app.get('/bank/:name/money/:dollars', function(req,res){
  let name = req.params.name
  let dollars = req.params.dollars
  res.send(`Hello ${name}. I see you have $${dollars} dollars`)
})
  

//listeners
app.listen(port,function(){
  console.log('App running on port 3000.')

})
