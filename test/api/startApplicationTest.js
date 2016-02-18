'use strict';
var middlewares = require('../../app/api/middlewares/setup.js');
var routes = require('../../app/api/routes.js');
var dependencySetup = require('./dependencySetupTest.js');

class StartApplication {
  start(app) {
    dependencySetup(app);
    middlewares.pre(app);
    routes(app);
    middlewares.pos(app);
  }
}

module.exports = new StartApplication();

