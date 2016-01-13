'use strict';

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
    .controller('SiteController', ['$scope', '$animate', 'siteData', function($scope, $animate, siteData) {
        return new SiteController($scope, $animate, siteData);
    }]);
