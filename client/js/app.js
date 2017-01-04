'use strict'
var app = angular.module("mistofy", ['ngRoute', 'ngAnimate', 'ngSanitize'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/landing.html',
            controller: 'MainController'
        })
        .when('/search', {
            templateUrl: '../views/search.html',
            controller: 'MainController'
        })
        .when('/song', {
            templateUrl: '../views/song.html',
            controller: 'MainController'
        })
        .when('/sentiment', {
            templateUrl: '../views/song.html',
            controller: 'SentimentController'
        })
        .when('/spotify', {
            templateUrl: '../views/song.html',
            controller: 'SpotifyController'
        })

});
