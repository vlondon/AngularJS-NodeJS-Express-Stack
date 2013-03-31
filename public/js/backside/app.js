'use strict';

// Declare app level module which depends on filters, and services
angular.module('backsideEpiManager', [
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

		$routeProvider.

		when("/", {
			templateUrl: "/studio/dashboard/index",
			controller: "backsideController"
  		}).

  		when("/users", {
  			templateUrl: "/backside/users",
  			controller: "usersController"
  		}).

		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true);
    	$locationProvider.hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {

	}]);