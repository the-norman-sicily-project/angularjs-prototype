'use strict';

angular.module('siciliaNormannaApp')
  .service('SiteResource', ['$resource', function($resource) {
    return $resource('/api/sites/:id');
  }])

  .service('SiteService', ['SiteResource', function(SiteResource) {
    this.getSite = function getSite(id) {
      return SiteResource.get({ id }).$promise;
    };

    this.getSites = function getSites() {
      return SiteResource.query().$promise;
    };
  }]);
