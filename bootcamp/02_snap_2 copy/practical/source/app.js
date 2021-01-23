const express = require('express');
const app = express();
const fetch = require('node-fetch');

const PORT = process.env.PORT || 8080

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
    console.log("Star Wars backend running on port 3000");
});