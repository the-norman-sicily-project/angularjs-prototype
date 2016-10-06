'use strict';

describe('Directive: youtube', function() {
  // load the directive's module
  beforeEach(module('siciliaNormannaApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should use scope code variable to construct youtube URL', inject(function($compile) {
    element = angular.element('<youtube code="code"></youtube>');
    scope.code = 'AAA111BBB';
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('iframe').attr('src')).to.contain(scope.code);
  }));
});
