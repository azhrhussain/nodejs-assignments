const express = require('express');
const app = express();
var router = express.Router();
var async = require('express-async-await');
var fetch = require('node-fetch');

const url = 'https://swapi.co/api/films/';
const queryVar = 'The Phantom Menace';
router.get('/movies', (req, res, next) => {
    try {
        function foundData() {
            return fetch(url);
        }
        const processData = async () => {
            const movies = await foundData();
            const resData = await movies.json();
            res.send(resData);
        }
        processData();
    } catch (error) {
        console.log(error);
    }
    res.end;
});
router.get('/find_movie', (req, res) => {
    fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            const { results } = data;
            let filteredData = results.filter(fd => fd.title === queryVar);
            if (!filteredData.length) {
                throw new Error('Movie not found')
            }
            res.send(filteredData);
        }).catch((reason) => {
            res.send(`${reason}`);
        });
    res.end;
});
app.use(router);
app.listen(4000, () => console.log('server listening on port 4000'));