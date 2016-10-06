'use strict';

describe('Directive: youtube', function() {
  // load the directive's module
  beforeEach(module('siciliaNormannaApp'));

  var element,
    scope,
    randomString;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
    randomString = (length, chars) => {
      var mask = '';
      if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
      if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (chars.indexOf('#') > -1) mask += '0123456789';
      if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
      var result = '';
      for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
      return result;
    };
  }));

  it('should use scope code variable to construct youtube URL', inject(function($compile) {
    element = angular.element('<youtube code="code"></youtube>');
    scope.code = randomString(10, 'aA#!');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('iframe').attr('src')).to.contain(scope.code);
  }));
});
