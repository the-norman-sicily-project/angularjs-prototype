'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController'
      });
  });
