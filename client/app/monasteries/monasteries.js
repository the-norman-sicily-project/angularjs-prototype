'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('monasteries', {
        url: '/monasteries',
        templateUrl: 'app/monasteries/monasteries.html',
        controller: 'MonasteriesCtrl'
      });
  });
