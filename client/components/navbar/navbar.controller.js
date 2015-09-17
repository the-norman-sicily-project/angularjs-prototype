'use strict';

angular.module('siciliaNormannaApp')
  .controller('NavbarController', function ($scope) {
    $scope.menu = [{
        'title': 'Home',
        'state': 'main'
    },
    {
        'title': 'Sites',
        'state': 'sites.list'
    },
    ];

    $scope.isCollapsed = true;
  });
