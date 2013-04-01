'use strict';

angular.module('backsideEpiManager').
  controller('usersController', [
    '$scope','$resource', 'User', 
    function($scope, $resource, User) {
    	
      User.query(function (users) {
      	$scope.data = users;
      });

    }
  ])