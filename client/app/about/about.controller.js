'use strict';

class AboutController {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('siciliaNormannaApp')
  .controller('AboutController', [function() {
    return new AboutController();
  }]);
