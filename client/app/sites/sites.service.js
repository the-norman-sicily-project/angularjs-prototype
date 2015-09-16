'use strict';

angular.module('siciliaNormannaApp')
  .factory('SiteService', function ($resource) {
	return $resource('/api/sites/:id', {id: '@id'},{
                'get': { method: 'GET', isArray: false }
            });
  });
