'use strict';

var config = browser.params;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    let promise = browser.get(config.baseUrl + '/');
    page = require('./main.po');
    return promise;
  });

  it('should include jumbotron with correct data', function() {
    expect(page.imgEl.getAttribute('src')).to.eventually.match(/title_bar.jpg$/);
  });
});
