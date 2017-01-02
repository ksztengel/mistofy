var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

router.get('/scraper', function(req, res) {
    console.log('in the scraper');
    
    url = 'https://www.musixmatch.com/lyrics/Bob-Dylan/Tempest';

    request(url, function(error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            var img;

        $('.banner-album-image img').filter(function() {
            var data = $(this);
            img = data.parent().children().attr('src');

                console.log('img', img);
            })
        }
    })
})



module.exports = router
