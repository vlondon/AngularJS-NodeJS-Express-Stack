'use strict';

/**/

angular.module('backsideEpiManager').
  controller('backsideController', [
    '$scope',
    function($scope) {
      $scope.title = "EpiManager Home";
    }
  ]).
  controller('loginController', [
  	'$scope', '$http', '$window',
  	function($scope, $http, $window) {

  		$scope.login = function() {
  			$http.post('/auth/v1/provider/web', {username: $scope.user.username, password: $scope.user.password}).then(function(response) {
		    	if(response.status === 200) {
		        	$window.location.href = '/backside';
		    	} else {
		        	alert('Incorrect credentials, please try again.');
		        }
		    });
  		}
  	}
  ])

