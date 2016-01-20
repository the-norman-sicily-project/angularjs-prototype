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
        var site = {
            name: {
                en: 'New Site One',
                it: 'Nuovo Sito Uno',
                variations: ['another variant'],
            },
            location: {
                approximate: 'Taormina',
                elevation: null,
                isExact: false,
                latitude: 45.95,
                longitude: 12.33,
                modernProvince: 'Messina'
            },
            bibliography: 'Some book',
            notes: 'This is the swanky site!!!',
            extantRemains: true,
            primarySourceQuotation: 'a quote',
            type: 'a type',
            datesVisited: ['10-09-2014'],
            details: []
        };

      request(app)
        .post('/api/sites')
        .send(site)
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
      expect(newSite.datesVisited).to.be.instanceOf(Array);
      expect(newSite.datesVisited[0]).to.equal('10-09-2014');
      expect(newSite.extantRemains).to.equal(true);
      expect(newSite.type).to.equal('a type');
      expect(newSite.primarySourceQuotation).to.equal('a quote');
      expect(newSite.notes).to.equal('This is the swanky site!!!');
      expect(newSite.bibliography).to.equal('Some book');
      expect(newSite.name.en).to.equal('New Site One');
      expect(newSite.name.it).to.equal('Nuovo Sito Uno');
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
      expect(site.name.en).to.equal('New Site One');
      expect(site.notes).to.equal('This is the swanky site!!!');
    });

  });

  describe('PUT /api/sites/:id', function() {
    var updatedSite;

    beforeEach(function(done) {
      request(app)
        .put('/api/sites/' + newSite._id)
        .send({
            name: {en: 'Updated Site'},
            notes: 'This is the updated site!!!'
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
      expect(updatedSite.name.en).to.equal('Updated Site');
      expect(updatedSite.notes).to.equal('This is the updated site!!!');
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
