'use strict';

angular.module('backsideEpiManager').
  factory('User', ['$resource', function($resource) {
    var user = $resource('/api/v1/users/:id', {id: '@id'}, {
  	  update: {method:'PUT'}
    });
    return user;
  }])
