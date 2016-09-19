'use strict';

class PeopleController {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('siciliaNormannaApp')
  .controller('PeopleController', [function() {
    return new PeopleController();
  }]);
