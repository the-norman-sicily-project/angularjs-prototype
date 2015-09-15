'use strict';

angular.module('siciliaNormannaApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
        'title': 'Home',
        'state': 'main'
    },
    {
        'title': 'Monasteries',
        'state': 'monasteries'
    },
    {
        'title': 'Fortifications',
        'state':'fortifications'
    },
    {
        'title': 'Sites',
        'state': 'sites'
    }
    ];

    $scope.isCollapsed = true;
  });
