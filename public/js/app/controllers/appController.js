'use strict';

angular.module('DemoApp').
  controller('appController', [
    '$scope',
    function($scope) {
      $scope.name = "Turtle Power";
      $scope.allShowSegments = ["Michelangelo", "Bebop", "Shredder", "Donatello", "Rocksteady", "Rafael", "Master Splinter", "Krang" , "Leonardo"];
      $scope.thisShowSegments = ["Ninja","Teenage","Turtles","Mutant"];
      $scope.showTemplates = [
        {"name":"Only Heroes", "segments":["Michelangelo", "Donatello", "Rafael", "Master Splinter", "Leonardo"]},
        {"name":"Only Villains", "segments":["Bebop", "Shredder", "Rocksteady", "Krang"]},
        {"name":"Mixed Bag", "segments":["Donatello", "Shredder", "Master Splinter", "Rocksteady"]}
      ];

      var sortableEle;

      $scope.sortableArray = $scope.thisShowSegments;

      $scope.createShow = function (segments){
        $scope.sortableArray = segments;
      }

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
  ])
