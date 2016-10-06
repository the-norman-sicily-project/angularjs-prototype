'use strict';

describe('Directive: youtube', function() {
  // load the directive's module
  beforeEach(module('siciliaNormannaApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<youtube></youtube>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the youtube directive');
  }));
});
