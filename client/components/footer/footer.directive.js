'use strict';

angular.module('siciliaNormannaApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link(scope, element) {
        element.addClass('footer');
      }
    };
  });
