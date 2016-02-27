'use strict';

class DocumentController {
  constructor($scope, $sce, $uibModalInstance, documentUrl, documentTitle) {
    this.id = Math.floor((Math.random() * 100) + 1);
    this.documentSource = $sce.trustAsResourceUrl(documentUrl);
    this.modalInstance = $uibModalInstance;
    this.title = documentTitle;
  }

  close() {
    this.modalInstance.dismiss('close');
  }
}

  angular.module('siciliaNormannaApp')
    .controller('DocumentController', ['$scope', '$sce', '$uibModalInstance', 'documentUrl', 'documentTitle', function($scope, $sce, $uibModalInstance, documentUrl, documentTitle){
      return new DocumentController($scope, $sce, $uibModalInstance, documentUrl, documentTitle);
    }]);
