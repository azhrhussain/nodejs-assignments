const express = require('express');
const app = express();
var router = express.Router();
var async = require('express-async-await');
var fetch = require('node-fetch');

const url = 'https://swapi.co/api/films/';
router.get('/movies', async function (req, res, next) {
    function foundData() {
        return fetch(url);
    }
    const processData = async () => {
        const movies = await foundData();
        const resData = await movies.json();
        console.log(resData);
    }
    processData();
    res.end;
});
// fetch(url, { method: 'GET' })
//     .then((res) => {
//         return res.json()
//     })
//     .then((json) => {
//         console.log(json);
//     });

// app.get('', (req, res) => {
// res.send()
// })
app.listen(4000, () => console.log('server listening on port 4000'));