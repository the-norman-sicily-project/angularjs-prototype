'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var fortificationsCtrlStub = {
  index: 'fortificationsCtrl.index',
  show: 'fortificationsCtrl.show',
  create: 'fortificationsCtrl.create',
  update: 'fortificationsCtrl.update',
  destroy: 'fortificationsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var fortificationsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './fortifications.controller': fortificationsCtrlStub
});

describe('Fortifications API Router:', function() {

  it('should return an express router instance', function() {
    expect(fortificationsIndex).to.equal(routerStub);
  });

  describe('GET /api/fortificationss', function() {

    it('should route to fortifications.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'fortificationsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/fortificationss/:id', function() {

    it('should route to fortifications.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'fortificationsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/fortificationss', function() {

    it('should route to fortifications.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'fortificationsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/fortificationss/:id', function() {

    it('should route to fortifications.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'fortificationsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/fortificationss/:id', function() {

    it('should route to fortifications.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'fortificationsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/fortificationss/:id', function() {

    it('should route to fortifications.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'fortificationsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
