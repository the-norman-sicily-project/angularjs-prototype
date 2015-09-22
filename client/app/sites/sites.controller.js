'use strict';

angular.module('siciliaNormannaApp')
  .controller('SitesController', function ($scope, sitesData) {
    $scope.sites= sitesData;
    $scope.siteTypes = _.groupBy($scope.sites, 'type');
  })
  .controller('SiteController', function ($scope, siteData) {
    $scope.site = siteData;
  });
