'use strict';

angular.module('backsideEpiManager').
  controller('usersController', [
    '$scope','$resource', 'User', 
    function($scope, $resource, User) {
      
      $scope.loadData = function() {
        User.query(function (users) {
          $scope.data = users;
        });
      }

      $scope.deleteUser = function (username) {
        console.log('clicked!');
        User.delete({username: username}, function (event) {
          $scope.loadData();
        });
      }

    }
  ]).
  controller('usersNewController', [
    '$scope','$resource', '$location', 'User', 
    function($scope, $resource, $location, User) {
      $scope.save = function(){
        User.save({}, $scope.user, function (event) {
          $location.path("/backside/users");
        }, function (err) {
          console.log(err);
        })
      }
    }
  ]).
  controller('usersEditController', [
    '$scope','$resource', '$routeParams', '$location', 'User', 
    function($scope, $resource, $routeParams, $location, User) {
      
      $scope.user = User.get($routeParams);

      $scope.update = function(){
        User.update($scope.user, function (event) {
          $location.path("/backside/users");
        }, function (err) {
          console.log(err);
        })
      }
    }
  ])