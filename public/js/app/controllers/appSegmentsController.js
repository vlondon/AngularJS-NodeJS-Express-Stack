'use strict';

angular.module('appEpiManager').
  controller('appSegmentsController', [
    '$scope',
    function($scope) {
      $scope.title = "EpiManager";
      $scope.showSegments = ["Introduction", "ShortStory", "News", "Special Guest"];
    }
  ])


  function SortableCTRL($scope) {
    var sortableEle;
    
    $scope.sortableArray = $scope.showSegments;

    $scope.add = function(segment) {
      $scope.sortableArray.push( segment );
    }

    $scope.remove = function(segment) {
      $scope.sortableArray.splice( 
        $scope.sortableArray.indexOf(segment), 1
      );
    }
    
    $scope.dragStart = function(e, ui) {
      ui.item.data('start', ui.item.index());
    }
    $scope.dragEnd = function(e, ui) {
      var start = ui.item.data('start'),
            end = ui.item.index();
        
      $scope.sortableArray.splice(end, 0, 
        $scope.sortableArray.splice(start, 1)[0]);
        
      $scope.$apply();
    }
        
    sortableEle = $('#sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });
  }



// angular.bootstrap(document, ['appEpiManager']);