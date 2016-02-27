'use strict';

class SiteController {
  constructor($scope, $animate, $uibModal, siteData) {
    this.carouselInterval = 3000;
    this.siteData = siteData;
    this.modal = $uibModal;

    $scope.$on('mapInitialized', function(event, map) {
      if (google) {
        google.maps.event.trigger(map, 'resize');
      }
    });
  }

  videoClick(videoUrl, videoTitle) {
    console.log(videoUrl);
    this.modalInstance = this.modal.open({
      animation: this.animationsEnabled,
      templateUrl: 'components/video-modal/video-modal.html',
      controller: 'VideoController',
      controllerAs: 'videoController',
      backdrop: true,
      size: 'lg',
      resolve: {
        videoUrl: function() {
          return videoUrl;
        },
        videoTitle: function() {
          return videoTitle;
        }
      }
    });
  }
}

angular.module('siciliaNormannaApp')
  .controller('SiteController', ['$scope', '$animate', '$uibModal', 'siteData', function($scope, $animate, $uibModal, siteData) {
    return new SiteController($scope, $animate, $uibModal, siteData);
  }]);
