'use strict';

angular.module('wwwEpiManager').
  controller('homepageController', [
    '$scope',
    function($scope) {
      $scope.title = "EpiManager";
    }
  ])