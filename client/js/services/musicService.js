'use strict'
app.service('MusicService', function($http) {
  console.log("in the MusicService")
    return {
        artistName: function(artist) {
            return $http.get(`http://localhost:3000/musicFetcher/?artist=${artist.name}`);
        },

        musixmatch: function(){
           return $http.get(`http://localhost:3000/musicFetcher/?`)

        }
    }

})
