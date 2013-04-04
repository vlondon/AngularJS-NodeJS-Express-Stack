module.exports = function(app) {
  var routing = this;

  app.get('/backside', function (req, res) {
    return res.render('backside/temple', {title: 'Epimanger'});
  })

  app.get('/backside/directives/navigation', function (req, res) {
    console.log('ping');
    return res.render("backside/directives/navigation");
  });

  app.all('/backside/*', function(req, res, next) {
     if (req.xhr) {
      next();
    }
    else {
      res.render('backside/temple', {title: 'Epimanager'});
    }
  });
      
  app.get('/backside/:directory/:view', function(req, res) {
    res.render("backside/"+req.params.directory+"/"+req.params.view);
  });
  
  return routing;
};