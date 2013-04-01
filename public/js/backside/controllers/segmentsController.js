'use strict';

angular.module('backsideEpiManager').
  controller('segmentsController', [
    '$scope','$resource',
    function($scope) {
      $scope.title = "Segments";
    }
  ])