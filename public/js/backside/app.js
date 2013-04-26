'use strict';

// Declare app level module which depends on filters, and services
angular.module('backsideEpiManager', [
	'ngResource',
  '$strap.directives',
  'ui'
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

    when("/backside/users/new", {
      templateUrl: "/backside/users/new",
      controller: "usersNewController"
    }).

    when("/backside/users/:username", {
      templateUrl: "/backside/users/edit",
      controller: "usersEditController"
    }).


		otherwise({redirectTo: "/error"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}]).
	run(['$rootScope','$location','$window', '$templateCache', function(
		$rootScope,$location,$window,$templateCache) {
    
	}]);
