'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('siciliaNormannaApp'));

  var HomeController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeController = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should have a non-empty string for idrisi popover content', function () {
    expect(HomeController.idrisiMapPopoverContent).should.not.be.empty;
  });
});
