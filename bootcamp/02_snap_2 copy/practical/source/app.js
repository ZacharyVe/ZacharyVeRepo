// ejs not installed
// not installed
const express = require('express');
const app = express();
// not installed
const fetch = require('node-fetch');
// port functions
const PORT = process.env.PORT || 8080;
// home renders
app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(req, res) {
    let characterNumber = req.query.userNumber
    let endpoint = 'https://swapi.dev/api/people/'

    fetch(endpoint + characterNumber)
        .then(res => JSON.parse(res))
        .then(data => {
            res.send('results.ejs', { data })
        })
        .catch(err => {
            console.log(err)
            res.render('error.ejs', { message: err })
        })
});

app.listen(PORT, function() {
    // wrong port was listed
    console.log("Star Wars backend running on port 8080");
});