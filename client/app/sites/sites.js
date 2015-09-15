'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sites', {
        url: '/sites',
        templateUrl: 'app/sites/sites.html',
        controller: 'SitesCtrl'
      });
  });
