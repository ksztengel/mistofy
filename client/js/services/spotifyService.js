'use strict'
app.service('SpotifyService', function($http) {
  console.log("in the SpotifyService")
    return {
        getSpotify: function(track_name) {
            return $http.get(`http://localhost:3000/spotify?track_name=${track_name}`);


        }
    }

})
