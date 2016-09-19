'use strict';

describe('Controller: SiteController', function() {
    beforeEach(module('siciliaNormannaApp'));

    var SiteController, scope;
    var testData = {site: {name: 'nameone'}};

    beforeEach(inject(function ($rootScope, $controller) {
          scope = $rootScope.$new();
          SiteController = $controller('SiteController', {
              $scope: scope, siteData: testData
              });
          }));

    it('should attach the data for a single site to the controller', function() {
        expect(SiteController.site).to.equal(testData);
        });
    });
