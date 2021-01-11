const express = require('express')
const app = express()
const $fetch = require('node-fetch')
const endpoint = ''

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('home.ejs')
})

app.get('lyricResults', (req, res)=>{
  let baseUrl = 'https://api.lyrics.ovh/v1/';
  let artist = req.query.artist;
  let title = req.query.title;
  let endpoint = `${baseUrl}/${artist}/${title}`;
  $fetch(endpoint)
  .then(response => {
    console.log(response)
    if(response.statusText){
    return response.json()
  } throw Error('THIS IS AN ERROR!!')})
  .then(data => {
    // console.log(data)
    // res.send(data.lyrics)
    let theLyrics = data.lyrics.replace(/\n/gi, '<br>')
    res.render('lyricsResults.ejs', {lyrics: data.theLyrics})
  })
  .catch(error => {
    res.render('error.ejs', {error: 'NO MATCHES FOUND'})
  })
  // res.send(endpoint)
})

app.listen(PORT, ()=> console.log(`app listening on port ${PORT}.`))