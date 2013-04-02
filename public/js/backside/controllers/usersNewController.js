'use strict';

angular.module('backsideEpiManager').
  controller('usersNewController', [
    '$scope','$resource', '$location', 'User', 
    function($scope, $resource, $location, User) {
    	$scope.save = function(){
    		User.create($scope.user, function (event) {
    			$location.path("/backside/users");
    		}, function (err) {
    			console.log(err);
    		})
    	}
    }
])