'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fortifications', {
        url: '/fortifications',
        templateUrl: 'app/fortifications/fortifications.html',
        controller: 'FortificationsCtrl'
      });
  });
