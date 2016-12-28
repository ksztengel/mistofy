'use strict'
var app = angular.module("mistofy", ['ngRoute', 'ngAnimate'])

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

});
