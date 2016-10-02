'use strict';

describe('Controller: AboutController', function() {
  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var AboutController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
    });
  }));

  it('should have a message', function() {
    expect(AboutController.message).to.equal('Hello');
  });
});
