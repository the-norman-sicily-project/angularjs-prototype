'use strict';

angular.module('siciliaNormannaApp')
  .directive('header', function() {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'E',
      controller: 'HeaderController',
      controllerAs: 'hdr'
    };
  });
