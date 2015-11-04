'use strict';

angular.module('siciliaNormannaApp')
    .filter('asDate', function () {
        return function (input) {
            if (!_.isString(input)) { return null; }
            if (input.indexOf('-') === -1) { return null; }

            var year, month, day;
            var parts = input.split('-');

            if (parts.length === 2) {
                year = parts[1] && parts[1].length === 4 ? parseInt(parts[1],10) : 0;
                month = parts[0] ? parseInt(parts[0],10) - 1 : 0;
                day = 1;
            } else if (parts.length === 3) {
                year = parts[2] && parts[2].length === 4 ? parseInt(parts[2],10) : 0;
                month = parts[1] ? parseInt(parts[1],10) - 1 : 0;
                day = parts[0] ? parseInt(parts[0],10) : 0;
            }

            return new Date(year, month, day);
        };
    });