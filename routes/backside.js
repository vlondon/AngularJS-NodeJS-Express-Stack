module.exports = function(app) {
  var routing = this;

  app.get('/backside/directives/navigation', function(req, res) {
    return res.render("directives/navigation");
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