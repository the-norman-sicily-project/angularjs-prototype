'use strict';

// From https://thecodebarbarian.wordpress.com/2014/01/17/the-8020-guide-to-writing-and-using-angularjs-filters/

angular.module('siciliaNormannaApp')
  .filter('pluralize', function() {
    return function(ordinal, noun) {
      if (ordinal > 1 && noun.length > 0) {
        var plural = noun;
        if (noun.substr(noun.length - 2) === 'us') {
          plural = `${plural.substr(0, plural.length - 2)}i`;
        } else if (noun.substr(noun.length - 2) === 'is') {
          plural = `${plural.substr(0, plural.length - 2)}es`;
        } else if (noun.substr(noun.length - 2) === 'ch' || noun.charAt(noun.length - 1) === 'x' || noun.charAt(noun.length - 1) === 's') {
          plural += 'es';
        } else if (noun.charAt(noun.length - 1) === 'y' && ['a', 'e', 'i', 'o', 'u'].indexOf(noun.charAt(noun.length - 2)) === -1) {
          plural = `${plural.substr(0, plural.length - 1)}ies`;
        } else {
          plural += 's';
        }
        return plural;
      } else {
        return noun;
      }
    };
  });
