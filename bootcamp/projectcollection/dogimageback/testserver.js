const express = require('express')
const app = express()
const $fetch = require('node-fetch')
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`
const endpoint = 'https://dog.ceo/api/breeds/image/rando'
app.get('/', (req, res)=>{
    res.render('home.ejs', {image: image, error: ''})
})
app.get('/getImage', (req, res)=>{
    $fetch(endpoint) // step 1 - go to, (fetch) url, endoint, 
    .then(response => {
        if(response.ok){
            return response.json()
        }
        throw Error('Zach messed it up!!!')
    })
    .then(data => res.render('home.ejs', {image: data.message}))
    .catch(error => 
        {
            console.log('Zach!!!!!!!!!')
            res.render('home.ejs', {image: '', error: error})
        // res.send(`Error: ${error}`)
    })
})
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))