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

    it('should attach a list of sites grouped by type to the scope', function () {
        expect(scope.sitesByTypes).to.equal(testData);
    });
});

describe('Controller: SiteController', function () {

    beforeEach(module('siciliaNormannaApp'));

    var SitesController, scope;
    var testData =  {site: {name: 'nameone'}};

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        SitesController = $controller('SiteController', {
            $scope: scope, siteData: testData
        });
    }));

    it('should attach the data for a single site to the scope', function () {
        expect(scope.site).to.equal(testData);
    });
});
