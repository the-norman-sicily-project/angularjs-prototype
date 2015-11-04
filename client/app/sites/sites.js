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
                return SiteService.getSites();
            },
            sitesByTypes: function(sitesData) {
                return _.groupBy(sitesData, 'type');
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
        views: {
            '': {
                templateUrl: '/app/sites/sites-detail.html',
                controller: 'SiteController'
            },
            'details-monastery@sites.detail': {
                templateUrl: '/app/sites/sites-details-monastery.html'
            },
            'details-fortification@sites.detail': {
                templateUrl: '/app/sites/sites-details-fortification.html'
            }
        },
        resolve: {
            siteData: function(SiteService, $stateParams) {
                return SiteService.getSite($stateParams.id);
            }
        },
        onEnter: function(){
            console.log('enter sites detail');
        }
        });
    });
