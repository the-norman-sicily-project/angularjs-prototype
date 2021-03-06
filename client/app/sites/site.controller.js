'use strict';

class SiteController {
  constructor($scope, $animate, $uibModal, siteData) {
    this.carouselInterval = 3000;
    this.siteData = siteData;
    this.modal = $uibModal;
  }

  mapInitialized(map) {
    this.map = map;
  }

  videoClick(videoUrl, videoTitle) {
    this.videoModalInstance = this.modal.open({
      animation: this.animationsEnabled,
      templateUrl: 'components/video-modal/video-modal.html',
      controller: 'VideoController',
      controllerAs: 'videoController',
      backdrop: true,
      size: 'lg',
      resolve: {
        videoUrl() {
          return videoUrl;
        },
        videoTitle() {
          return videoTitle;
        }
      }
    });
  }

  documentClick(documentUrl, documentTitle) {
    this.documentModalInstance = this.modal.open({
      templateUrl: 'components/document-modal/document-modal.html',
      controller: 'DocumentController',
      controllerAs: 'documentController',
      resolve: {
        documentUrl() {
          return documentUrl;
        },
        documentTitle() {
          return documentTitle;
        }
      }
    });
  }
}

angular.module('siciliaNormannaApp')
  .controller('SiteController', ['$scope', '$animate', '$uibModal', 'siteData', function($scope, $animate, $uibModal, siteData) {
    return new SiteController($scope, $animate, $uibModal, siteData);
  }]);
