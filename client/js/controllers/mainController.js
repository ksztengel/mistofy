'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, $sanitize, $timeout) {

    $scope.artist = {}
    $scope.artist.loading = false
    $scope.submitArtist = function(artist) {
        console.log('artist', artist);
        $scope.artist.loading = true

        MusicService.artistName($scope.artist).then(artist => {


            MusicService.musixmatch($scope.artist).then(data => {

                var trackInfo = JSON.parse(data.data.body)

                $rootScope.trackInfo = trackInfo.message.body.track_list

                console.log('trackInfo', $rootScope.trackInfo);

            })

        })
    }

    $scope.artist.loading = false

    $scope.scraper = function(track) {
        ScraperService.getImage(track).then(image => {
            $rootScope.image = image.data
            $rootScope.lyrics = image.data.lyrics
            var image = image.data.img
            console.log('lyrics:', $rootScope.lyrics);
            console.log('image', image);


        }).then(() => {

            console.log('sentiment was fired! here are the lyrics', $rootScope.lyrics);
            var lyrics = $rootScope.lyrics
            SentimentService.getSentiment(lyrics).then(emotions => {
                console.log('emotions:', emotions);
                $rootScope.emotions = emotions.data.docEmotions
                console.log('rootScope', emotions.data.docEmotions);

                var anger = emotions.data.docEmotions.anger
                var disgust = emotions.data.docEmotions.disgust
                var fear = emotions.data.docEmotions.fear
                var joy = emotions.data.docEmotions.joy
                var sadness = emotions.data.docEmotions.sadness


            })


        })
    }

    $scope.spotify = function(track) {

        SpotifyService.getSpotify(track).then(music => {

            var title = JSON.parse(music.data.body)
            $rootScope.title = title.tracks
            console.log(title.tracks);

            var snip = $sanitize(title.tracks.items["0"].preview_url)
            $rootScope.snippet = angular.copy(snip.trim())
            console.log('snippet', $rootScope.snippet);
            console.log('title', title);

        })
    }
    $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",


        legend: {
            layout: "x1",
            position: "1%",
            borderColor: "transparent",
            marker: {
                borderRadius: 5,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "10px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "anger",
            values: [34],
            backgroundColor: "#e53935",
        }, {
            text: "disgust",
            values: [25],
            backgroundColor: "#4caf50"
        }, {
            text: "fear",
            values: [16],
            backgroundColor: "#ffeb3b"
        }, {
            text: "joy",
            values: [2],
            backgroundColor: "#7e57c2"
        }, {
            text: "sadness",
            values: [31],
            backgroundColor: "#1976d2",
        }]
    };
});
