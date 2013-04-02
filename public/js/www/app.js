'use strict';

// Declare app level module which depends on filters, and services
angular.module('wwwEpiManager', [
	'ngResource',
  '$strap.directives'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

		$routeProvider.

		when("/www", {
			templateUrl: "/www/homepage/index",
			controller: "wwwController"
  		}).

		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {

	}]);
