const express = require ('express')
const app = express()
const $fetch = require('node-fetch')
const endpoint = 'https://dog.ceo/api/breeds/image/random'

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
let image = 'https://images.dog.ceo/breeds/hound-english/n02089973_1357.jpg'

app.get('/', (req, res)=>{
  res.send('home.ejs', {image: image})
})

app.get('/getImage', (req, res)=>{
  $fetch(endpoint)
  .then(response =>{
    if(response.ok){
    return response.json()
  }
  throw Error('zach messed it up!!')
  })
  .then(data => res.render('home.ejs', {image: data.message}))
  .catch(error => 
    {console.log('Zach!!!')
    res.render('home.ejs', {image: '', error: error})
    })
  })

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))