'use strict';

describe('Controller: PeopleController', function () {

  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var PeopleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleCtrl = $controller('PeopleController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
