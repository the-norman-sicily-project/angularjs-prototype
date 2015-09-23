'use strict';

angular.module('siciliaNormannaApp')
    .directive('siteLocation', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/site-location/site-location.html',
            scope: {
                location: '='
            }
        };
    });
