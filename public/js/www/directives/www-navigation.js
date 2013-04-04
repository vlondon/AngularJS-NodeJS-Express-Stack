'use strict';

angular.module('wwwEpiManager').
  directive('wwwNavigation', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/www/directives/navigation'
    };
  }]);