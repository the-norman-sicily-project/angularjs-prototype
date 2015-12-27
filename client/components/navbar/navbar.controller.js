'use strict';

angular.module('siciliaNormannaApp')
  .controller('NavbarController', function ($scope) {
    $scope.menu = [{
        'title': 'Home',
        'state': 'main'
    },
    {
        'title': 'People',
        'state': 'people'
    },
    {
        'title': 'Places',
        'state': 'sites.list'
    },
    {
        'title': 'About',
        'state': 'about'
    }
    ];

    $scope.isCollapsed = true;
  });
