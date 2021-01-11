const express = require('express')
const app = express()

const people = require('./data')

console.log(people)


const PORT = process.env.PORT || 3000



app.get('/', (req, res)=>{
  res.render('home.ejs', {data: people})
})


app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}`)
})