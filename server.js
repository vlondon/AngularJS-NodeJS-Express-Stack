
/**
 * Module dependencies.
 */

 GLOBAL.EpiManager = {};
 GLOBAL.EpiManager.Model = require('./model/mongo');

var express = require('express')
  , fs = require('fs')
  , http = require('http')
  , passport = require('passport')
  , passportConfig = require('./lib/passport')
  , LocalStrategy = require('passport-local').Strategy
  , path = require('path');

require('express-resource');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

var wwwRoutes = require('./routes/www')(app);
var resourceRoutes = require('./routes/resources')(app);
var authRoutes = require('./routes/auth')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
