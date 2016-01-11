'use strict';

import google from 'google.maps';

class SiteController {
    constructor($scope, $animate, siteData) {
        this.carouselInterval = 3000;
        this.siteData = siteData;

        $scope.$on('mapInitialized', function(event, map) {
            google.maps.event.trigger(map,'resize');
        });
    }
}

angular.module('siciliaNormannaApp')
    .controller('SiteController', ['$scope', '$animate', 'siteData', 'NgMap', function($scope, $animate, siteData, NgMap) {
        return new SiteController($scope, $animate, siteData, NgMap);
    }]);
