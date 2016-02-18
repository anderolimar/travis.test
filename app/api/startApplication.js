'use strict';
var middlewares = require('./middlewares/setup.js');
var routes = require('./routes.js');
var dependencySetup = require('./dependencySetup.js');

class StartApplication {
}

StartApplication.start = function (app) {
  dependencySetup(app);
  middlewares.pre(app);
  routes(app);
  middlewares.pos(app);
  app.set('port', 8080);
};

module.exports = StartApplication;

