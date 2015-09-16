'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sites', {
        url: '/sites',
        templateUrl: 'app/sites/sites.html',
        controller: 'SitesCtrl',
        resolve: {
            sitesData: function(SiteService) {
                var SitesData = SiteService.query();
                return SitesData.$promise;
            }
        }
      })
      .state('sites.detail', {
        url: '/:id',
        templateUrl: 'app/sites/site.html',
        controller: 'SiteCtrl',
        resolve: {
            siteData: function(SiteService, $stateParams) {
                var SiteData = SiteService.get({id: $stateParams.id});
                return SiteData.$promise;
            }
        }
        });
    });
