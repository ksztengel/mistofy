'use strict'
app.controller('SpotifyController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService) {
    console.log("in the SpotifyController");
    // $scope.image = {}

    SpotifyService.getSpotify().then(response =>{
    
      var music = JSON.parse(response.data.body)
      console.log('music', music);

    })
})
