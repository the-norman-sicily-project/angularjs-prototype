'use strict';

angular.module('siciliaNormannaApp')
  .filter('asDate', function () {
    return function (input) {
        if (input == null) { return null; }
        var parts = input.split('-');
        return new Date(parseInt(parts[2], 10),
                  parseInt(parts[1], 10) - 1,
                  parseInt(parts[0], 10));
    };
  });
