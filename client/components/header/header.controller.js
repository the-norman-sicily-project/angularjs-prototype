'use strict';

class HeaderController {
  constructor() {
    this.title = 'The Norman Sicily Project';
    this.subtitle = 'Envisioning the Norman State in Southern Italy, c. 1061 - 1194';
  }
}

angular.module('siciliaNormannaApp')
  .controller('HeaderController', function() {
    return new HeaderController();
  });
