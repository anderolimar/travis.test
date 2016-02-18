var express = require('express');
var router = express.Router();
var BaseController = require('./base/baseController');

router.get('/:id', function (req, res, next) {
    var baseController = new BaseController(req);
	baseController.successResponse(res, { result : 'OK' });
});

module.exports = router;