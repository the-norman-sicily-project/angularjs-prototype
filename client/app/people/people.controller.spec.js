'use strict';

describe('Controller: PeopleController', function() {
  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var PeopleController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleController = $controller('PeopleController', {
      $scope: scope
    });
  }));

  it('should have a message', function() {
    expect(PeopleController.message).to.equal('Hello');
  });
});
