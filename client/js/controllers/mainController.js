'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService) {

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


    $scope.scraper = function(track) {

        ScraperService.getImage(track).then(image => {

            var lyrics = image.data.lyrics
            var image = image.data.img
            console.log('lyrics:', lyrics);
            console.log('image', image);


        })
    }

    $scope.sentiment = function(lyrics) {

        SentimentService.getSentiment(lyrics).then(emotions => {

            console.log('emotions:', emotions);
            var anger = emotions.data.docEmotions.anger
            var disgust = emotions.data.docEmotions.disgust
            var fear = emotions.data.docEmotions.fear
            var joy = emotions.data.docEmotions.joy
            var sadness = emotions.data.docEmotions.sadness
            console.log("anger", anger);
            console.log("disgust", disgust);
            console.log("fear", fear);
            console.log("joy", joy);
            console.log("sadness", sadness);

        })
    }

    $scope.spotify = function(track) {

        SpotifyService.getSpotify(track).then(music => {

            var title = JSON.parse(music.data.body)

            console.log('music', title);

        })
    }


})
