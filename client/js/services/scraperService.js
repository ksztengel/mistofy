'use strict'
app.service('ScraperService', function($http) {
  console.log("in the ScraperService")
    return {
        getImage: function() {
            return $http.get(`http://localhost:3000/scraper/`
            );

        }
    }

})
