'use strict';

angular.module('siciliaNormannaApp')
    .controller('SitesController', function ($scope, sitesByTypes) {
        $scope.sitesByTypes = sitesByTypes;
    })
    .controller('SiteController', function ($scope, siteData) {
        $scope.site = siteData;
    });
