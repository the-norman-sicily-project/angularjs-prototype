'use strict';

var app = require('../..');
var request = require('supertest');

var newFortifications;

describe('Fortifications API:', function() {

  describe('GET /api/fortificationss', function() {
    var fortificationss;

    beforeEach(function(done) {
      request(app)
        .get('/api/fortificationss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          fortificationss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(fortificationss).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/fortificationss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fortificationss')
        .send({
          name: 'New Fortifications',
          info: 'This is the brand new fortifications!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newFortifications = res.body;
          done();
        });
    });

    it('should respond with the newly created fortifications', function() {
      expect(newFortifications.name).to.equal('New Fortifications');
      expect(newFortifications.info).to.equal('This is the brand new fortifications!!!');
    });

  });

  describe('GET /api/fortificationss/:id', function() {
    var fortifications;

    beforeEach(function(done) {
      request(app)
        .get('/api/fortificationss/' + newFortifications._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          fortifications = res.body;
          done();
        });
    });

    afterEach(function() {
      fortifications = {};
    });

    it('should respond with the requested fortifications', function() {
      expect(fortifications.name).to.equal('New Fortifications');
      expect(fortifications.info).to.equal('This is the brand new fortifications!!!');
    });

  });

  describe('PUT /api/fortificationss/:id', function() {
    var updatedFortifications

    beforeEach(function(done) {
      request(app)
        .put('/api/fortificationss/' + newFortifications._id)
        .send({
          name: 'Updated Fortifications',
          info: 'This is the updated fortifications!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedFortifications = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFortifications = {};
    });

    it('should respond with the updated fortifications', function() {
      expect(updatedFortifications.name).to.equal('Updated Fortifications');
      expect(updatedFortifications.info).to.equal('This is the updated fortifications!!!');
    });

  });

  describe('DELETE /api/fortificationss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/fortificationss/' + newFortifications._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when fortifications does not exist', function(done) {
      request(app)
        .delete('/api/fortificationss/' + newFortifications._id)
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
