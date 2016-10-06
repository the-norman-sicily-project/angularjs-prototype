'use strict';

class YouTubeDirective {
  constructor($sce) {
    this.restrict = 'EA';
    this.scope = { code: '='};
    this.replace = true;
    this.template = '<div class="center-block" style="width:711px;height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>';
    this.link = scope => {
      scope.url = $sce.trustAsResourceUrl(`http://www.youtube.com/embed/${scope.$parent.home.code}?rel=0&modestbranding=1&showinfo=0`);
    };
  };
}

angular.module('siciliaNormannaApp')
  .directive('youtube', ['$sce', function($sce) {
    return new YouTubeDirective($sce);
  }]);
