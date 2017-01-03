'use strict'
app.controller('SentimentController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService) {
    console.log("in the SentimentController");
    // $scope.image = {}
  
    SentimentService.getSentiment().then(response =>{
      console.log('img from ScraperController', response);
    })
})
