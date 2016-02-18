'use strict';
class BaseController {
  constructor(req) {
	this.req;
  }

  errorHandler(res, obj) {
    if (obj instanceof Error) {
      this.internalServerErrorResponse(res);
    }
    else {
      if (BaseController.NOT_IMPLEMENTED.status == obj.status) {
        this.notImplementedResponse(res);
      }
      else {
        this.badRequestResponse(res, obj);
      }
    }
  }

  internalServerErrorResponse(res) {
    res.status(500);
    res.json(BaseController.INTERNAL_SERVER_ERROR);
  }

  notImplementedResponse(res) {
    res.status(501);
    res.json(BaseController.NOT_IMPLEMENTED);
  }

  badRequestResponse(res, obj) {
    res.status(400);
    res.json(obj);
  }

  successResponse(res, obj) {
    var response = BaseController.OK;
    response.content = obj;
    res.status(200);
    res.json(response);
  }
}

BaseController.OK = { status: 'OK', message: 'Success' };

BaseController.INTERNAL_SERVER_ERROR = { status: 'INTERNAL_SERVER_ERROR', message: 'Internal Server Error.' };

BaseController.NOT_IMPLEMENTED = { status: 'NOT_IMPLEMENTED', message: 'Not implemented.' };

module.exports = BaseController;