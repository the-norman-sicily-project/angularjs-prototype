'use strict';

angular.module('siciliaNormannaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('sites', {
        abstract: true,
        url: '/sites',
        views: {
          '@': {
            templateUrl: 'app/sites/sites.html',
            controller: 'SitesController',
            controllerAs: 'sites'
          }
        },
        resolve: {
          sitesData(SiteService) {
            return SiteService.getSites();
          },
          sitesByTypes(sitesData) {
            return _.groupBy(_.sortBy(sitesData, 'name.en'), 'type');
          }
        },
        onEnter() {
          console.log('enter sites');
        }
      })
      .state('sites.list', {
        url: '',
        views: {
          '@sites': {
            templateUrl: 'app/sites/sites-list.html'
          }
        },
        onEnter() {
          console.log('enter sites list');
        }
      })
      .state('sites.detail', {
        url: '/:id',
        views: {
          '@sites': {
            templateUrl: 'app/sites/sites-detail.html',
            controller: 'SiteController',
            controllerAs: 'site'
          },
          'details-monastery@sites.detail': {
            templateUrl: 'app/sites/sites-details-monastery.html'
          },
          'details-fortification@sites.detail': {
            templateUrl: 'app/sites/sites-details-fortification.html'
          }
        },
        resolve: {
          siteData(SiteService, $stateParams) {
            return SiteService.getSite($stateParams.id);
          }
        },
        onEnter() {
          console.log('enter sites detail');
        }
      });
  });
