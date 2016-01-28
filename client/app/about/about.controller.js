'use strict';

class AboutController {
  constructor() {
    this.messsage = 'Hello';
  }
}

angular.module('siciliaNormannaApp')
  .controller('AboutController', function() {
    return new AboutController();
  });
