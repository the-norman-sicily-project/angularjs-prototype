'use strict';

describe('Filter: pluralize', function() {
  // load the filter's module
  beforeEach(module('siciliaNormannaApp'));

  // initialize a new instance of the filter before each test
  var pluralize;
  beforeEach(inject(function($filter) {
    pluralize = $filter('pluralize');
  }));

  it('should correctly pluralize word ending in -ch"', function() {
    var text = 'church';
    expect(pluralize(2, text)).to.equal(`${text}es`);
  });

  it('should correctly pluralize word ending in -x"', function() {
    var text = 'tax';
    expect(pluralize(2, text)).to.equal(`${text}es`);
  });

  it('should correctly pluralize word ending in -s"', function() {
    var text = 'boss';
    expect(pluralize(2, text)).to.equal(`${text}es`);
  });

  it('should correctly pluralize word ending in -us"', function() {
    var text = 'virus';
    expect(pluralize(2, text)).to.equal(`${text.substr(0, text.length - 2)}i`);
  });

  it('should correctly pluralize word ending in -is"', function() {
    var text = 'basis';
    expect(pluralize(2, text)).to.equal(`${text.substr(0, text.length - 2)}es`);
  });

  it('should correctly pluralize word ending in -y preceded by a consonant', function() {
    var text = 'lady';
    expect(pluralize(2, text)).to.equal(`${text.substr(0, text.length - 1)}ies`);
  });

  it('should correctly pluralize word ending in -y preceded by a vowel', function() {
    var text = 'trolley';
    expect(pluralize(2, text)).to.equal(`${text}s`);
  });

  it('should correctly pluralize regular word', function() {
    var text = 'hedge';
    expect(pluralize(2, text)).to.equal(`${text}s`);
  });

  it('should return unchanged word if ordinal is 1', function() {
    var text = 'car';
    expect(pluralize(1, text)).to.equal(text);
  });

  it('should return unchanged word if ordinal is 0', function() {
    var text = 'car';
    expect(pluralize(0, text)).to.equal(text);
  });

  it('should return empty string if given one, regardless of ordinal', function() {
    var text = '';
    expect(pluralize(1, text)).to.equal(text);
    expect(pluralize(1, text)).to.equal(text);
  });
});
