'use strict';

angular.module('backsideEpiManager').
  factory('User', ['$resource', function($resource) {
    var user = $resource('/api/v1/users/:username', {}, {
      get:    {method:'GET'},
	  save:   {method:'POST'},
	  query:  {method:'GET', isArray:true},
	  remove: {method:'DELETE', params:{username:'@username'}},
	  delete: {method:'DELETE', params:{username:'@username'}},
	  update: {method:'PUT', params:{username:'@username'}}
    });
    return user;
  }])
