'use strict'
app.controller('MainController', function($scope, MusicService, $http) {
    console.log("in the MainController");

    $scope.artist = {}

    $scope.submitArtist = function(artist) {
        console.log('artist', artist);
        MusicService.artistName(artist).then(artist => {

        })
    }
    MusicService.musixmatch().then(data=>{
      console.log('data', data.body);
      var stuff = JSON.parse(data.data.body)
      console.log('stuff',stuff);
    })
})
