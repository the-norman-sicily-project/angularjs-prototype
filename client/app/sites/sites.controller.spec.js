'use strict';

describe('Controller: SitesController', function () {

    beforeEach(module('siciliaNormannaApp'));

    var SitesController, scope;
    var testData =  [{type: 'typeone', site: {name: 'nameone'}}, {type: 'typetwo', site: {name: 'nametwo'}}];

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        SitesController = $controller('SitesController', {
            $scope: scope, sitesByTypes: testData
        });
    }));

    it('should attach a list of sites grouped by type to the controller', function () {
        expect(SitesController.sitesByTypes).to.equal(testData);
    });
});
