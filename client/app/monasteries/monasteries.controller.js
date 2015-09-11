'use strict';

angular.module('siciliaNormannaApp')
  .controller('MonasteriesCtrl', function ($scope, $http) {
    $scope.monasteries = [];

    $http.get('api/monasteries').then(function(response) {
        $scope.monasteries = response.data;
    });
  });
