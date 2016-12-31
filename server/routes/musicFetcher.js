var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("requested index route", req.body);

    let artist_name = req.query.artist

    url = `http://api.musixmatch.com/ws/1.1/track.search?apikey=039bb7c9d51f22a7e8c0b6e09187e48d&q_artist=   ${artist_name}&s_track_release_date&page_size=100`;


    request(url, function(error, response, html) {
        res.json(response)

    })

});



module.exports = router;
