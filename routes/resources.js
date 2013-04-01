module.exports = function(app) {
  var routing = this;
 
  var newsArticles = app.resource('newsarticles', require('../resources/newsarticles'), {base: '/api/v1'} );
  var youtubeLinks = app.resource('youtubelinks', require('../resources/youtubelinks'), {base: '/api/v1'} );
  var usersData = app.resource('users', require('../resources/users'), {base: '/api/v1'} );
  var rolesData = app.resource('roles', require('../resources/roles'), {base: '/api/v1'} );
  var segmentsData = app.resource('segments', require('../resources/segments'), {base: '/api/v1'} );
  var shortStories = app.resource('shortstories', require('../resources/shortstories'), {base: '/api/v1'} );
  
  return routing;
};