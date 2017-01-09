'use strict'
app.service('ScraperService', function($http) {
  console.log("in the ScraperService")
    return {
        getImage: function(track) {
            return $http.post('https://localhost:3000/scraper', {track});


        }
    }

})
