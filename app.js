var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var stylus = require('stylus');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var config = require('./app.config');

var winston = require('winston'),
  expressWinston = require('express-winston');

var isProduction = process.env.NODE_ENV === 'production';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'frontcamp', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

app.use(
  expressWinston.logger({
    transports: [
      // new winston.transports.Console({
      //   json: true,
      //   colorize: true
      // }),
      new winston.transports.File({
        filename: 'combined.log'
      })
    ],
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true,
    colorStatus: true
  })
);

// mongoose

mongoose.connect(config.connectionString);
mongoose.set('debug', true);
autoIncrement.initialize(mongoose.connection);

require('./pages/blogs/blog.schema');
require('./pages/users/user.schema');
require('./core/passport');

app.use(require('./routes'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // var err = new Error('Not Found');
  // err.status = 404;
  // next(err);

  res.redirect('/');
});

// error handler
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

app.get('*', function(req, res) {
  res.redirect('/');
});

module.exports = app;
