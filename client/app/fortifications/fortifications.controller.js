'use strict';

angular.module('siciliaNormannaApp')
  .controller('FortificationsCtrl', function ($scope, $http) {
    $scope.fortifications = [];
    
    $http.get('api/fortifications').then(function(response) {
        $scope.fortifications = response.data;
    });
  });
