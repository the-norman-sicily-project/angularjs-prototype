'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var siteCtrlStub = {
  index: 'siteCtrl.index',
  show: 'siteCtrl.show',
  create: 'siteCtrl.create',
  update: 'siteCtrl.update',
  destroy: 'siteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var siteIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './site.controller': siteCtrlStub
});

describe('Site API Router:', function() {
  it('should return an express router instance', function() {
    expect(siteIndex).to.equal(routerStub);
  });

  describe('GET /api/sites', function() {
    it('should route to site.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'siteCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/sites/:id', function() {
    it('should route to site.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'siteCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/sites', function() {
    it('should route to site.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'siteCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/sites/:id', function() {
    it('should route to site.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'siteCtrl.update')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sites/:id', function() {
    it('should route to site.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'siteCtrl.update')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sites/:id', function() {
    it('should route to site.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'siteCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
