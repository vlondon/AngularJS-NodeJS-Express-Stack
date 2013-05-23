'use strict';

angular.module('DemoApp').
  directive('appFooter', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/footer'
    };
  }]);