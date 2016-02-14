'use strict';

angular.module('siciliaNormannaApp')
    .service('SiteResource', ['$resource', function($resource) {
        return $resource('/api/sites/:id');
    }])

    .service('SiteService', ['SiteResource', function(SiteResource) {
        this.getSite = function(id) {
            return SiteResource.get({
                id: id
            }).$promise;
        };

        this.getSites = function() {
            return SiteResource.query().$promise;
        };
    }]);
