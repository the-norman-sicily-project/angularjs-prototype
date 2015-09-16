'use strict';

angular.module('siciliaNormannaApp')
  .controller('SitesCtrl', function ($scope, sitesData) {
    $scope.sites= sitesData;
    $scope.siteTypes = _.groupBy($scope.sites, 'siteType');
  })
  .controller('SiteCtrl', function ($scope, siteData) {
    $scope.site = siteData;
  });
