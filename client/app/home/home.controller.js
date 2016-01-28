'use strict';

class HomeController {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('siciliaNormannaApp')
  .controller('HomeController', function () {
    return new HomeController();
  });
