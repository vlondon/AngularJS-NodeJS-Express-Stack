'use strict';

angular.module('appEpiManager').
  directive('appNavigation', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/navigation'
    };
  }]);