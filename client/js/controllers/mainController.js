'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, $sanitize, $timeout) {

    $scope.artist = {}
    $scope.artist.loading = false
    $scope.submitArtist = function(artist) {

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
    $rootScope.myJson = {
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
            text: "%v feeling"
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
            values: [35],
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
                // console.log('emotions:', emotions);
                $rootScope.emotions = emotions.data.docEmotions
                graphIt(emotions.data.docEmotions, $rootScope.myJson.series)


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

    //emotion obj comes from watson
    // series is $scope.series
    // keys comes from really hard coded values
    // when you get the motion obj back,  set it to a variable and call the graphIt function
    function graphIt(emotionObj, items) {
        console.log(`graphing!`, emotionObj, items);
        for (let prop in emotionObj) {
            for (let item of items) {
                // console.log(item.text);
                if (item.text === prop) {
                    item.values[0] = emotionObj[prop] * 100
                }
            }
            // console.log(`prop`);
            // let value = emotionObj[prop] * 100;
            // console.log("value", value);
            // items.values.push(value)
        }
        console.log("myJson after graphIt", $rootScope.myJson);
        // emotionObj.forEach(item=> {
        //   // item.values.push(emotionObj[lables[idx]])
        // })
    }

});
