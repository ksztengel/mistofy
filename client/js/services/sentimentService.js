'use strict'
app.service('SentimentService', function($http) {
  console.log("in the SentimentService")
    return {
        getSentiment: function(lyrics) {
            // return $http.post('http://localhost:3000/sentimentFetcher', {lyrics});
            return $http.post('https://ksztengel-mistofy.herokuapp.com/sentimentFetcher', {lyrics});


        }
    }

})
//need to pass in lyrics  and {lyrics}
