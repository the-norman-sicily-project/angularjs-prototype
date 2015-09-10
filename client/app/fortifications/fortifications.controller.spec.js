'use strict';

describe('Controller: FortificationsCtrl', function () {

  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var FortificationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FortificationsCtrl = $controller('FortificationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
