'use strict';

class HomeController {
  constructor($scope, $sce) {
    this.idrisiMapPopoverContent = $sce.trustAsHtml('Detail from Muhammad al-Idrīsī\'s world map contained in the twelfth-century <em>Kitāb nuzhat al-mushtāq fī ikhtirāq al-āfāq</em> (<em>The Pleasure Excursion of One Who Is Eager to Traverse the Regions of the World</em>), whose title Idrīsī later changed to <em>Kitab Rujar</em> (<em>Book of Roger</em>), which contained what was perhaps the most accurate map of the medieval world. The selection is an illustration of Sicily and Southern Italy. The orientation appears to be upside down because south is located at the top of the map in accordance with the cartographic conventions of the <em>Balkhī</em> school of geography.');
    $scope.code = "CZYBeWEAeC4";
  }
}

angular.module('siciliaNormannaApp')
  .controller('HomeController', ['$scope', '$sce', function($scope, $sce) {
    return new HomeController($scope, $sce);
  }]);
