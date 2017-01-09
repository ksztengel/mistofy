'use strict'
app.controller('TimeLineController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, TimeLineService) {
    console.log("in the TimeLineController");

    var trackInfo = $rootScope.trackInfo
    $scope.events = TimeLineService.getTL()
    console.log('$scope.events', $scope.events);

    $scope.$watch("trackInfo", function(newTrackInfo, oldValue) {
        // console.log('newTrackInfo', newTrackInfo);
        // console.log('oldValue', oldValue);
        if (newTrackInfo == undefined) return
        var tlInfo = newTrackInfo.map(item => {
            var artist = item.track.artist_name;
            var year = item.track.first_release_date.slice(0, 4);
            var song = item.track.track_name

            // console.log('item=========',item.track);
            // console.log("artist", artist);
            // console.log("year", year);
            // console.log("song", song);
            var tlData = {

                "start_date": {

                    "year": year
                },
                "headline": artist,
                "text": {
                    "text": "<p style ='color:black; font-weight:bold'>" + song + "</p>"
                }
            }

            $scope.events.events.push(tlData)
            var timeline = new TL.Timeline('timeline-embed', $scope.events);
        })
    });
    console.log('rootScope in TL controller', $rootScope.trackInfo);



})

// tl-timemarker-content-container	div	The flag of the marker. You can set the flag's background color and text color here. When writing styles for this selector, preface this selector with .tl-timemarker (for slides other than the current slide) or .tl-timemarker.tl-timemarker-active (for the current slide).
