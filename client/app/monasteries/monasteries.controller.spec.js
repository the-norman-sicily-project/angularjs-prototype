'use strict';

describe('Controller: MonasteriesCtrl', function () {

  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var MonasteriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonasteriesCtrl = $controller('MonasteriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
