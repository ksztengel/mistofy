'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService) {
    // console.log("in the MainController");

    $scope.artist = {}

    $scope.submitArtist = function(artist) {
        console.log('artist', artist);

        MusicService.artistName($scope.artist).then(artist => {

            MusicService.musixmatch($scope.artist).then(data => {

                var trackInfo = JSON.parse(data.data.body)

                $rootScope.trackInfo = trackInfo.message.body.track_list

                console.log('trackInfo', $rootScope.trackInfo);


            })

        })
    }

    $scope.sentiment = function(track){

      SentimentService.getSentiment(track).then(emotions =>{

        console.log('emotions:', emotions);

      })
    }

    $scope.scraper = function(track){

      ScraperService.getImage(track).then(image => {

        console.log('image:', image);

      })
    }

    $scope.spotify = function(track){

      SpotifyService.getSpotify(track).then(music => {

        var title = JSON.parse(music.data.body)
        console.log('music', title);

      })
    }


})
