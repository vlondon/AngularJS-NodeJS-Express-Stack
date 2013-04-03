'use strict';

angular.module('backsideEpiManager').
  factory('User', ['$resource', function($resource) {
    var user = $resource('/api/v1/users/:username', {username:'@username'}, {
      'save': { method: 'PUT' },
      'create': { method: 'POST' },
      'remove': { method: 'DELETE' }
    });
    return user;
  }])
