var express = require('express');
var router = express.Router();

router.get("/movies", async (req, res) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`;
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(movies => res.json({ movies: movies.results }))
    .catch(err => console.error(err));
})


module.exports = router;