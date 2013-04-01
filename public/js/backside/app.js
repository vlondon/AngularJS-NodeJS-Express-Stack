'use strict';

// Declare app level module which depends on filters, and services
angular.module('backsideEpiManager', [
	'ngResource',
  '$strap.directives'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

		$routeProvider.

		when("/backside", {
			templateUrl: "/backside/dashboard/index",
			controller: "backsideController"
  		}).

  		when("/backside/users", {
  			templateUrl: "/backside/users/index",
  			controller: "usersController"
  		}).

  		when("/backside/segments", {
  			templateUrl: "/backside/segments/index",
  			controller: "segmentsController"
  		}).

  		when("/backside/newsarticles", {
  			templateUrl: "/backside/newsarticles/index",
  			controller: "newsArticlesController"
  		}).

  		when("/backside/shortstories", {
  			templateUrl: "/backside/shortstories/index",
  			controller: "shortStoriesController"
  		}).

  		when("/backside/youtubelinks", {
  			templateUrl: "/backside/youtubelinks/index",
  			controller: "youTubeLinksController"
  		}).

		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {

	}]);
