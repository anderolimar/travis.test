'use strict';
class ServerApplication {
}

ServerApplication.start = function (app) {
  app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + this.address().port);
		/*if (app.get('env') === 'development')
			require('../../test/run.js');*/
  });
};

module.exports = ServerApplication;