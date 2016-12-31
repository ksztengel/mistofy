var express = require('express');
var request = require('request');
var watson = require('watson-developer-cloud');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var router = express.Router();


var alchemy_language = new AlchemyLanguageV1({
  api_key: 'ae3cac2e850b748ff85360a7a562ca1750059d82'
});

var parameters = {

  url: 'https://www.musixmatch.com/lyrics/Bob-Dylan/Tempest'
};

alchemy_language.emotion(parameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(response);
});

module.exports = router;
