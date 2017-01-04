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

                console.log("anger", anger);
                console.log("disgust", disgust);
                console.log("fear", fear);
                console.log("joy", joy);
                console.log("sadness", sadness);

            })


        })
    }

    // $scope.sentiment = function(lyrics) {
    //   // if($rootScope.image == undefined) {
    //   //   $timeout(()=>{
    //   //     console.log('waiting for a ');
    //   //   })
    //   // }
    //
    // }

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


})
