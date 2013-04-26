var passport = require('passport');

module.exports = function(app) {
  var routing = this;

  app.post('/auth/v1/provider/web', function (req, res, next){
  	passport.authenticate('local', function (err, user, info) {
  		if (err) { return next(err) }
  		if (!user) {
  			return res.send(401);
  		}
  		req.logIn(user, function(err){
  			if (err) { return next(err); }
  			return res.send(200);
  		});
  	})(req,res,next);
  	console.log('check auth');
  });

  return routing;
};