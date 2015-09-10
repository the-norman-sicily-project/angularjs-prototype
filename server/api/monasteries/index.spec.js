'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var monasteriesCtrlStub = {
  index: 'monasteriesCtrl.index',
  show: 'monasteriesCtrl.show',
  create: 'monasteriesCtrl.create',
  update: 'monasteriesCtrl.update',
  destroy: 'monasteriesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var monasteriesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './monasteries.controller': monasteriesCtrlStub
});

describe('Monasteries API Router:', function() {

  it('should return an express router instance', function() {
    expect(monasteriesIndex).to.equal(routerStub);
  });

  describe('GET /api/monasteriess', function() {

    it('should route to monasteries.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'monasteriesCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/monasteriess/:id', function() {

    it('should route to monasteries.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'monasteriesCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/monasteriess', function() {

    it('should route to monasteries.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'monasteriesCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/monasteriess/:id', function() {

    it('should route to monasteries.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'monasteriesCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/monasteriess/:id', function() {

    it('should route to monasteries.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'monasteriesCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/monasteriess/:id', function() {

    it('should route to monasteries.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'monasteriesCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
