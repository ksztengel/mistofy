'use strict'
app.controller('ScraperController', function($scope, MusicService, $http, $rootScope, ScraperService) {
    console.log("in the ScraperController");
    $scope.image = {}

    ScraperService.getImage().then(img =>{

    })
})
