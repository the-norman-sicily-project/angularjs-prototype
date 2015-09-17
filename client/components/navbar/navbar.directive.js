'use strict';

angular.module('siciliaNormannaApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarController'
    };
  });
