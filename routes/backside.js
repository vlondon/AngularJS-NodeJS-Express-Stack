module.exports = function(app) {
  var routing = this;

  app.get('/backside', function (req, res) {
    return res.render('backside/temple', {title: 'Epimanger'});
  })

  app.get('/backside/directives/navigation', function (req, res) {
    return res.render("directives/navigation");
  });

  app.all('/backside/*', function(req, res, next) {
    var angular = (req.headers['x-requested-with'] === 'XMLHttpRequest') ? true : false;
    if (angular) {
      next();
    }
    else {
      return res.redirect('/backside');
    }
  });
      
  app.get('/backside/:directory/:view', function(req, res) {
    res.render("backside/"+req.params.directory+"/"+req.params.view);
  });
  
  return routing;
};