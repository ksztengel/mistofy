'use strict'
app.service('ScraperService', function($http) {
  console.log("in the ScraperService")
    return {
        getImage: function(track) {
            // return $http.post('http://localhost:3000/scraper', {track});
            return $http.post('https://ksztengel-mistofy.herokuapp.com/scraper', {track});


        }
    }

})
