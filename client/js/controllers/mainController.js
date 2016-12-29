'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope) {
    console.log("in the MainController");

    $scope.artist = {}

    $scope.submitArtist = function(artist) {
        console.log('artist', artist);

        MusicService.artistName($scope.artist).then(artist => {

            MusicService.musixmatch($scope.artist).then(data => {

                var trackInfo = JSON.parse(data.data.body)

                $rootScope.trackInfo = trackInfo
                // var trackArray = Object.values(trackInfo)

                console.log('trackInfo', trackInfo);

            })

        })
    }
})
