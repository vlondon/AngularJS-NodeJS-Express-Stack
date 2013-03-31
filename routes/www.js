module.exports = function(app) {
  var routing = this;

  app.get('/', function (req, res) {
    return res.render('construction');
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