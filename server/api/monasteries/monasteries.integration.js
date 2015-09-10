'use strict';

var app = require('../..');
var request = require('supertest');

var newMonasteries;

describe('Monasteries API:', function() {

  describe('GET /api/monasteriess', function() {
    var monasteriess;

    beforeEach(function(done) {
      request(app)
        .get('/api/monasteriess')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          monasteriess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(monasteriess).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/monasteriess', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/monasteriess')
        .send({
          name: 'New Monasteries',
          info: 'This is the brand new monasteries!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newMonasteries = res.body;
          done();
        });
    });

    it('should respond with the newly created monasteries', function() {
      expect(newMonasteries.name).to.equal('New Monasteries');
      expect(newMonasteries.info).to.equal('This is the brand new monasteries!!!');
    });

  });

  describe('GET /api/monasteriess/:id', function() {
    var monasteries;

    beforeEach(function(done) {
      request(app)
        .get('/api/monasteriess/' + newMonasteries._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          monasteries = res.body;
          done();
        });
    });

    afterEach(function() {
      monasteries = {};
    });

    it('should respond with the requested monasteries', function() {
      expect(monasteries.name).to.equal('New Monasteries');
      expect(monasteries.info).to.equal('This is the brand new monasteries!!!');
    });

  });

  describe('PUT /api/monasteriess/:id', function() {
    var updatedMonasteries

    beforeEach(function(done) {
      request(app)
        .put('/api/monasteriess/' + newMonasteries._id)
        .send({
          name: 'Updated Monasteries',
          info: 'This is the updated monasteries!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMonasteries = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMonasteries = {};
    });

    it('should respond with the updated monasteries', function() {
      expect(updatedMonasteries.name).to.equal('Updated Monasteries');
      expect(updatedMonasteries.info).to.equal('This is the updated monasteries!!!');
    });

  });

  describe('DELETE /api/monasteriess/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/monasteriess/' + newMonasteries._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when monasteries does not exist', function(done) {
      request(app)
        .delete('/api/monasteriess/' + newMonasteries._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
