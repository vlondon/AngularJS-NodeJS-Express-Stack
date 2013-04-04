module.exports = function(app) {
  var routing = this;

  app.get('/', function (req, res) {
    return res.render('www/temple', {title: 'Epimanger'});
  })

  app.get('/www/directives/navigation', function (req, res) {
    return res.render("www/directives/navigation");
  });

  app.all('/www/*', function(req, res, next) {
    if (req.xhr) {
      next();
    }
    else {
      res.render('www/temple');
    }
  });

  app.get('/www/:directory/:view', function(req, res) {
    res.render("www/"+req.params.directory+"/"+req.params.view);
  });

  // app.get('/login', function(req, res) {
  //   return res.render("www/chrome-public");
  // });

  // app.get('/uvlogin', function(req, res) {
  //   return res.render("www/chrome-public");
  // });

  // app.get('/logout', function(req, res) {
  //   if (req.isAuthenticated)
  //     req.logOut();
  //   return res.render("www/chrome-public");
  // });
  return routing;
};