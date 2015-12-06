'use strict';

angular.module('siciliaNormannaApp')
    .controller('SitesController', function ($scope, sitesByTypes) {
        $scope.sitesByTypes = sitesByTypes;
    })
    .controller('SiteController', function ($scope, $animate, siteData) {
        $scope.carouselInterval = 3000;
        $scope.site = siteData;
    });
