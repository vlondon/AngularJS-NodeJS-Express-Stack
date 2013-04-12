'use strict';

angular.module('appEpiManager').
  directive('appFooter', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/footer'
    };
  }]);