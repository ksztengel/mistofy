var express = require('express');
var request = require('request');
var watson = require('watson-developer-cloud');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var router = express.Router();

router.post('/', function(req, res) {
    console.log('lyrics:', req.params.lyrics);

    var alchemy_language = new AlchemyLanguageV1({
        api_key: 'ae3cac2e850b748ff85360a7a562ca1750059d82'
    });

    var parameters = {

        text:
        'Dont you know I had a dream last night That you were here with me Lyin by my side so soft and warm And we talked a while And shared a smile And then we shared the dawn But when I woke up Oh, my dream it was gone Dont you know I had a dream last night And you were here with me Lyin by my side so soft and warm And you said youd thought it over You said you were coming home But when I woke up Oh, my dream it was gone Im not the same Can you blame me Is it hard to understand I cant forget You cant change me I am not that kind of man'};

    alchemy_language.emotion(parameters, function(err, response) {
        if (err)
            console.log('error:', err);
        else
            console.log(response);
            res.json(response)
    })
});

module.exports = router;
