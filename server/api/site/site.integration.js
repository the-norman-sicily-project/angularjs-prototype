'use strict';

var app = require('../..');
var request = require('supertest');

var newSite;

describe('Site API:', function() {

  describe('GET /api/sites', function() {
    var sites;

    beforeEach(function(done) {
      request(app)
        .get('/api/sites')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          sites = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(sites).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/sites', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sites')
        .send({
          name: 'New Site',
          info: 'This is the brand new site!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newSite = res.body;
          done();
        });
    });

    it('should respond with the newly created site', function() {
      expect(newSite.name).to.equal('New Site');
      expect(newSite.info).to.equal('This is the brand new site!!!');
    });

  });

  describe('GET /api/sites/:id', function() {
    var site;

    beforeEach(function(done) {
      request(app)
        .get('/api/sites/' + newSite._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          site = res.body;
          done();
        });
    });

    afterEach(function() {
      site = {};
    });

    it('should respond with the requested site', function() {
      expect(site.name).to.equal('New Site');
      expect(site.info).to.equal('This is the brand new site!!!');
    });

  });

  describe('PUT /api/sites/:id', function() {
    var updatedSite

    beforeEach(function(done) {
      request(app)
        .put('/api/sites/' + newSite._id)
        .send({
          name: 'Updated Site',
          info: 'This is the updated site!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSite = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSite = {};
    });

    it('should respond with the updated site', function() {
      expect(updatedSite.name).to.equal('Updated Site');
      expect(updatedSite.info).to.equal('This is the updated site!!!');
    });

  });

  describe('DELETE /api/sites/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/sites/' + newSite._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when site does not exist', function(done) {
      request(app)
        .delete('/api/sites/' + newSite._id)
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
