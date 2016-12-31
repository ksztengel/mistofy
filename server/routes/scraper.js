var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

router.get('/scraper', function(req, res){
  console.log('in the scraper');
  // Let's scrape Anchorman 2
  url = 'https://www.musixmatch.com/lyrics/Bob-Dylan/Tempest';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var img;
      var json = { img: ""};

      $('.img').filter(function(){
        var data = $(this);
        img= data.children().first().text().trim();


        json.img = img;
        console.log('img', img);
      })
    }
  })
})



module.exports = router
