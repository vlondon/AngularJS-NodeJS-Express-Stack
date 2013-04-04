'use strict';

angular.module('backsideEpiManager').
  directive('backsideNavigation', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/backside/directives/navigation'
    };
  }]);