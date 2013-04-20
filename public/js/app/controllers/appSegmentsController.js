'use strict';

angular.module('appEpiManager').
  controller('appSegmentsController', [
    '$scope',
    function($scope) {
      $scope.title = "EpiManager";
      $scope.showSegments = ["Introduction", "ShortStory", "News", "Special Guest"];
    }
  ])

angular.bootstrap(document, ['appEpiManager']);