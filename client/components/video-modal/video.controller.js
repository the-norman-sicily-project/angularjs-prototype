'use strict';

class VideoController {
  constructor($scope, $sce, $uibModalInstance, videoUrl, videoTitle) {
    this.id = Math.floor((Math.random() * 100) + 1);
    this.videoSource = $sce.trustAsResourceUrl(videoUrl);
    this.modalInstance = $uibModalInstance;
    this.title = videoTitle;
  }

  close() {
    this.modalInstance.dismiss('close');
  }
}

  angular.module('siciliaNormannaApp')
    .controller('VideoController', ['$scope', '$sce', '$uibModalInstance', 'videoUrl', 'videoTitle', function($scope, $sce, $uibModalInstance, videoUrl, videoTitle){
      return new VideoController($scope, $sce, $uibModalInstance, videoUrl, videoTitle);
    }]);
