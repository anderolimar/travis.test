var request = require('supertest');
var should = require('should');
var app = require('../../../appTest.js');

describe('Test Controller', function () {

  describe('Action /:id', function () {
    it('Should return OK', function (done) {

      request(app)
        .get('/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function (obj) {
          console.log(obj.res.body);
		  obj.res.body.content.result.should.be.equal('OK');
        })
        .end(function (err, res) {
          done(err);
        });
    });
	
it('Should return Error', function (done) {

      request(app)
        .get('/test/1')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect(function (obj) {
          console.log(obj.res.body);
		  obj.res.body.message.should.be.equal('Not Found');
        })
        .end(function (err, res) {
          done(err);
        });
    });
	
  });
});