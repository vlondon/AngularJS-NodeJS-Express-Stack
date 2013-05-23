
/**
 * Module dependencies.
 */
var express = require('express')
  , fs = require('fs')
  , http = require('http')
  , path = require('path');

require('express-resource');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon( __dirname + '/public/img/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

var appRoutes = require('./routes/app')(app);

app.locals({
  staticAssetHost: 'http://localhost:3000',
  title: 'Demo App'
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
