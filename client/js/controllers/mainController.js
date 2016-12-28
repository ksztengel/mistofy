'use strict'
app.controller('MainController', function($scope, MusicService, $http) {
    console.log("in the MainController");

    $scope.artist = {}

    $scope.submitArtist = function(artist) {
        console.log('artist', artist);

        MusicService.artistName($scope.artist).then(artist => {

        MusicService.musixmatch($scope.artist).then(data=>{

            var trackInfo = JSON.parse(data.data.body)
            console.log('trackInfo', trackInfo);

          })

        })
    }
})
