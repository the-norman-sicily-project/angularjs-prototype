'use strict';

describe('Filter: asDate', function () {

  // load the filter's module
  beforeEach(module('siciliaNormannaApp'));

  // initialize a new instance of the filter before each test
  var asDate;
  beforeEach(inject(function ($filter) {
    asDate = $filter('asDate');
  }));

  it('should return null when given null', function() {
   expect(asDate(null)).to.be.null;
  });

  it('should return null when given a non-date string', function () {
    expect(asDate('this is not a date')).to.be.null;
  });

  it('should return null when given a number', function () {
    expect(asDate(999)).to.be.null;
  });

  it('should return a date when given a month year string', function () {
    var expected = new Date(2015,8);
    expect(asDate('08-2015')).to.be.instanceOf(Date).and.to.equalDate(expected);
  });

  it('should return a date when given a day month year string', function () {
    var expected = new Date(2015,8,15);
    expect(asDate('15-08-2015')).to.be.instanceOf(Date).and.to.equalDate(expected);
  });
});
