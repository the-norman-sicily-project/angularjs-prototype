'use strict';

describe('Service: sites', function () {

  // load the service's module
  beforeEach(module('siciliaNormannaApp'));

  // instantiate service
  var sites;
  beforeEach(inject(function (_sites_) {
    sites = _sites_;
  }));

  it('should do something', function () {
    expect(!!sites).to.be.true;
  });

});
