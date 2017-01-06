if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

switch (app.get('env')) {
    case 'development':
        app.use(logger('dev'));
        break;

    case 'production':
        app.use(logger('short'));
        break;

    default:
}

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/index.html')));

var musicFetcher = require('./routes/musicFetcher');
app.use('/musicFetcher', musicFetcher);

var sentimentFetcher = require('./routes/sentimentFetcher');
app.use('/sentimentFetcher', sentimentFetcher);

var scraper = require('./routes/scraper');
app.use('/scraper', scraper);

var spotify = require('./routes/spotify');
app.use('/spotify', spotify);



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    if (app.get('env') !== 'test') {
        // eslint-disable-next-line no-console
        console.log('Listening on port', port);
    }
});


module.exports = app;
