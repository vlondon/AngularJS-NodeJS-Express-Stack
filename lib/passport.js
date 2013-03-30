var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , Model = EpiManager.Model;



passport.use(new LocalStrategy(
  function(username, password, done) {
    Model.User.findOne({ username: username, password: password }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect login.' });
      }
      return done(null, user);
    });
  }
));