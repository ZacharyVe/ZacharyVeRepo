//fundumentals
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
//route handle
app.get('/', (req, res)=>{
    res.send('I am the root route.')
})
let data = ['Shih-Yu', 'Nebi', 'Julie', 'JM']
app.get('/home', (req, res)=>{
    res.render('home.ejs', {data: ['Shih-Yu', 'Nebi', 'Julie', 'JM']})
})
app.get('/about', (req, res)=>{
    res.render('about.ejs')
})
app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})
app.get('/doMath', (req,res)=>{
  let rand = Math.random()*12
  console.log(rand)
  res.redirect('home.ejs')
})
//Listeners
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))

