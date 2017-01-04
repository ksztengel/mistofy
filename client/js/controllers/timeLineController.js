'use strict'
app.controller('TimeLineController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, TimeLineService) {
    console.log("in the TimeLineController");


    $scope.events = TimeLineService.getTL()
    console.log('$scope.events', $scope.events);

    $scope.events.events.push({

        "start_date": {

            "month": "8",
            "day": "28",
            "year": "1985"
        },
        "text": {
            "text": "<p>TEST TEST TEST.</p>"
        }
    } )
    var timeline = new TL.Timeline('timeline-embed', $scope.events);

})

//for loop over data text: song title  date:  year
// {{trackInfo[$index].track.track_name}} {{trackInfo[$index].track.first_release_date | date : format : 'yyyy'}}
