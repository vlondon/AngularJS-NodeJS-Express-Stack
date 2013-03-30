'use strict';

angular.module('soundSelectShared').
  factory('User', ['$resource', function($resource) {
    var user = $resource('/api/v1/users/:id', {id:'@id'}, {
      'save': { method: 'PUT' },
      'create': { method: 'POST' }
    });
    return artist;
  }])
