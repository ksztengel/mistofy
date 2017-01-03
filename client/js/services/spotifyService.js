'use strict'
app.service('SpotifyService', function($http) {
  console.log("in the SpotifyService")
    return {
        getSpotify: function() {
            return $http.get('http://localhost:3000/spotify');


        }
    }

})
