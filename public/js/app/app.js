'use strict';

// Declare app level module which depends on filters, and services
angular.module('appEpiManager', [
	'ngResource',
	'$strap.directives',
	'ui'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

		$routeProvider.

		when("/app", {
			templateUrl: "/app/dashboard/index",
			controller: "appDashController"
  		}).

		when("/app/cast", {
			templateUrl: "/app/cast/index",
			controller: "appCastController"
  		}).

  		when("/app/segments", {
			templateUrl: "/app/segments/index",
			controller: "appSegmentsController"
  		}).

  		when("/app/details", {
  			templateUrl: "/app/details/index",
  			controller: "appDetailsController"
  		}).

		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {

	}]);

