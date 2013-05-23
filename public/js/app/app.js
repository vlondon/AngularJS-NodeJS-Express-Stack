'use strict';

// Declare app level module which depends on filters, and services
angular.module('DemoApp', [
	'ngResource',
	'$strap.directives'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

	$routeProvider.

	when("/app/segments", {
			templateUrl: "/app/segments/index",
			controller: "appController"
   }).
	when("/app/goodbye", {
			templateUrl: "/app/goodbye/index",
			controller: "appController"
   }).

		otherwise({redirectTo: "/app/segments"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}])