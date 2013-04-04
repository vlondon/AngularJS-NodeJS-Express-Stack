'use strict';

// Declare app level module which depends on filters, and services
angular.module('wwwEpiManager', [
	'ngResource',
  '$strap.directives'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


		$routeProvider.
		
		when("/", {
			templateUrl: "/www/homepage/index",
			controller: "homepageController"
  		}).

  		when("/producer", {
			templateUrl: "/www/producer/index",
			controller: "producerController"
  		}).

		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {

	}]);
