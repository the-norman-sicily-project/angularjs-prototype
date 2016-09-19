'use strict';

class SitesController {
  constructor($scope, sitesByTypes) {
    this.sitesByTypes = sitesByTypes;
  }
}

angular.module('siciliaNormannaApp')
  .controller('SitesController', ['$scope', 'sitesByTypes', function($scope, sitesByTypes) {
    return new SitesController($scope, sitesByTypes);
  }]);
