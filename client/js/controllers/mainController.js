'use strict'
app.controller('MainController', function($scope, MusicService, $http, $rootScope, ScraperService, SentimentService, SpotifyService, $sanitize, $timeout) {

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
            $rootScope.image = image.data
                // console.log("image", image.data);
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
  //   $scope.myJson = {
  //         globals: {
  //             shadow: false,
  //             fontFamily: "Verdana",
  //             fontWeight: "100"
  //         },
  //         type: "pie",
  //         backgroundColor: "#fff",
  //
  //         legend: {
  //             layout: "x5",
  //             position: "50%",
  //             borderColor: "transparent",
  //             marker: {
  //                 borderRadius: 10,
  //                 borderColor: "transparent"
  //             }
  //         },
  //         tooltip: {
  //             text: "%v requests"
  //         },
  //         plot: {
  //             refAngle: "-90",
  //             borderWidth: "0px",
  //             valueBox: {
  //                 placement: "in",
  //                 text: "%npv %",
  //                 fontSize: "15px",
  //                 textAlpha: 1,
  //             }
  //         },
  //         series: [{
  //             text: "10.0.0.80",
  //             values: [4660],
  //             backgroundColor: "#FA6E6E #FA9494",
  //         }, {
  //             text: "167.114.156.198",
  //             values: [1807],
  //             backgroundColor: "#F1C795 #feebd2"
  //         }, {
  //             text: "103.24.77.25",
  //             values: [1611],
  //             backgroundColor: "#FDAA97 #FC9B87"
  //         }, {
  //             text: "46.4.68.142",
  //             values: [1341],
  //             backgroundColor: "#28C2D1"
  //         }, {
  //             text: "10.0.0.117",
  //             values: [1269],
  //             backgroundColor: "#D2D6DE",
  //         }]
  //     };
  });
