'use strict';

describe('Filter: asDate', function () {

  // load the filter's module
  beforeEach(module('siciliaNormannaApp'));

  // initialize a new instance of the filter before each test
  var asDate;
  beforeEach(inject(function ($filter) {
    asDate = $filter('asDate');
  }));

  it('should return the input prefixed with "asDate filter:"', function () {
    var text = 'angularjs';
    expect(asDate(text)).to.equal('asDate filter: ' + text);
  });

});
