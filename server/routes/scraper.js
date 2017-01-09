var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

router.post('/', function(req, res) {
    console.log('track:', req.body.track);


    url = req.body.track

    request(url, function(error, response, body) {
      console.log("body in scraper", body);
        if (!error) {
            var $ = cheerio.load(body);
            var img;
            var lyrics;


            $('.banner-album-image img').filter(function() {
                var data = $(this);
                img = data.parent().children().attr('src');

                console.log('img:', img);
            })

            $('.mxm-lyrics__content').filter(function() {
                var data = $(this);
                lyrics = data.text();

                console.log('lyrics:', lyrics);
            })

            res.json({
                img,
                lyrics
            })

        }
    })
})



module.exports = router
