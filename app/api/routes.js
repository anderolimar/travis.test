
module.exports = function (app) {
  app.use('/', require('./controllers/testController.js'));
};