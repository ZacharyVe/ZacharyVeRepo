// 
const express = require('express')
const app = express()
const request = require('request')

let endpoint = 'https://www.metaweather.com/api/location/2487956/'

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render('home.ejs')
  })

app.get('/results', (req, res)=>{
  // 1. calling getting url endpoint
  // 2. getting json and pare into obj
  // 3. do something with that object
  // 4. error handle
  request(endpoint, function(error, response, body){  // calling getting url endpoint
  // do stuff
  if(!error && response.statusCode == 200){
    let parsedData = JSON.parse(body)   // getting json and pare into obj
    console.log = parsedData
    res.render('results.ejs', {data: parsedData}) // JSON.parse(body) without a variable could be used
  }
  res.render('error.ejs')

  })
})

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))





    
//     // 4) error handling
//   request(endpoint, function(error, response, body){// 1) calling, getting url - endpoint
//   let parsedData = JSON.parse(body) // 2) getting JSON and parsing into an object
//   res.render('results.ejs', {data: parsedData}) // 3) do something with that object
//   })
// })
// app.listen(PORT, () => console.log(`App listening on port ${PORT}.`)