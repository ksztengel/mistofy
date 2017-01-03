'use strict'
app.service('SentimentService', function($http) {
  console.log("in the SentimentService")
    return {
        getSentiment: function(track) {
            return $http.post('http://localhost:3000/sentimentFetcher', {track});


        }
    }

})
