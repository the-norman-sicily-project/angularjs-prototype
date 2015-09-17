'use strict';

angular.module('siciliaNormannaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sites', {
        abstract: true,
        url: '/sites',
        templateUrl: 'app/sites/sites.html',
        controller: 'SitesController',
        resolve: {
            sitesData: function(SiteService) {
                var SitesData = SiteService.query();
                return SitesData.$promise;
            }
        },
        onEnter: function() {
            console.log('enter sites');
        }
      })
      .state('sites.list', {
        url: '',
        templateUrl: 'app/sites/sites-list.html',
        onEnter: function() {
            console.log('enter sites list');
        }
      })
      .state('sites.detail', {
        url: '/:id',
        templateUrl: 'app/sites/sites-detail.html',
        controller: 'SiteController',
        resolve: {
            siteData: function(SiteService, $stateParams) {
                var SiteData = SiteService.get({id: $stateParams.id});
                return SiteData.$promise;
            }
        },
        onEnter: function(){
            console.log('enter sites detail');
        }
        });
    });
