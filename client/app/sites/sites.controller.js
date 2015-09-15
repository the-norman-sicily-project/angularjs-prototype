'use strict';

angular.module('siciliaNormannaApp')
  .controller('SitesCtrl', function ($scope, $http) {
    $scope.sites= [];
    $scope.siteTypes= [];
    
    $http.get('api/sites').then(function(response){
        $scope.sites = response.data;
        $scope.siteTypes = _.groupBy($scope.sites, 'siteType');
    })
  });
