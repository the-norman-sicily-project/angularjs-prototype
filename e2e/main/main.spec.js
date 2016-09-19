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
    expect(page.h1El.getText()).to.eventually.equal('The Norman Sicily Project');
    expect(page.h2El.getText()).to.eventually.equal('Envisioning the Norman State in Southern Italy, c. 1061 - 1194');
    expect(page.imgEl.getAttribute('src')).to.eventually.match(/idrisi_map.png$/);
  });
});
