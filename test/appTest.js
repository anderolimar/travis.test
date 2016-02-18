var express = require('express');
var app = express();

var startApp = require('./api/startApplicationTest.js');

startApp.start(app);

module.exports = app;