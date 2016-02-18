var bodyParser = require('body-parser');
var logger = require('morgan');
var compression = require('compression');

var middlewares = {};

middlewares.pre = function (app) {
  console.log('Setting up middlewares.');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(logger('dev'));
  app.use(compression());
};

middlewares.pos = function (app) {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    if (res.status == 500)
      return;
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
    
  // error handlers    
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.send({
        message: err.message,
        error: err
      });
    });
  }
    
  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  });
};

module.exports = middlewares;
