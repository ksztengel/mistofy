'use strict'
app.controller('TimeLineController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, TimeLineService) {
    console.log("in the TimeLineController");

    var trackInfo = $rootScope.trackInfo
    $scope.events = TimeLineService.getTL()
    console.log('$scope.events', $scope.events);

    $scope.$watch("trackInfo", function(newTrackInfo, oldValue) {
        console.log('newTrackInfo', newTrackInfo);
        console.log('oldValue', oldValue);
        if (newTrackInfo == undefined) return
        var tlInfo = newTrackInfo.map(item => {
            var artist = item.track.artist_name;
            var year = item.track.first_release_date.slice(0, 4);
            var song = item.track.track_name

            // console.log('item=========',item.track);
            console.log("artist", artist);
            console.log("year", year);
            console.log("song", song);
            var tlData = {

                "start_date": {


                    "year": year
                },
                "headline": artist,
                "text": {
                    "text": "<p style='background-color:#e3f2fd'>" + song + "</p>"
                }
            }
            $scope.events.events.push(tlData)
            var timeline = new TL.Timeline('timeline-embed', $scope.events);
        })
    });
    console.log('rootScope in TL controller', $rootScope.trackInfo);



})

//for loop over data text: song title  date:  year
// {{trackInfo[$index].track.track_name}} {{trackInfo[$index].track.first_release_date | date : format : 'yyyy'}}
