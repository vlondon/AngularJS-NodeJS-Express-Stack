'use strict';

angular.module('DemoApp').
  directive('appNavigation', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/navigation'
    };
  }]);