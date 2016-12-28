'use strict'
app.controller('MainController', function($scope, MusicService) {
    console.log("in the MainController");
    $scope.artist = {}
    $scope.submitArtist = function(artist) {
        console.log('artist', artist);
        MusicService.artistName().then(artist => {

        })
    }
})
