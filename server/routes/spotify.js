var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var track_name = req.query.track_name
console.log("requested spotify route", req.query.track_name);

    var client_id = 'fe4df94b5b89432c829d8d01b6922636'; // Your client id
    var client_secret = '45dcb702577f48f8bae0b1a90b17751e'; // Your secret

    url = `https://api.spotify.com/v1/search?q=:"${track_name}"&type=track`;


    request(url, function(error, response, html) {
      // console.log('response', response.body);
        res.json(response)

    })

});

module.exports = router;
