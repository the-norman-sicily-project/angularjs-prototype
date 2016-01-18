'use strict';

class NavbarController {
    constructor() {
    this.menu = [{
        'title': 'Home',
        'state': 'home'
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
    }];

    this.isCollapsed = true;

    }
}

angular.module('siciliaNormannaApp')
  .controller('NavbarController', function(){
    return new NavbarController();
  });
