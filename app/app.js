var express = require('express');
var app = express();
var startApp = require('./api/startApplication.js');

startApp.start(app);

module.exports = app;