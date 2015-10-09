'use strict';

describe('Service: Site Resource', function () {
    var siteResource, $httpBackend;

    beforeEach(module('siciliaNormannaApp'));

    beforeEach(inject(function(_$httpBackend_, SiteResource) {
        $httpBackend = _$httpBackend_;
        siteResource = SiteResource;
    }));

    describe('Resource tests', function() {
        it ('should respond with all sites', function() {
            var expected = [{id: 1}, {id: 2}];
            var actual = {};

            $httpBackend.whenGET('/api/sites').respond(expected);

            siteResource.query().$promise.then(function(result_) {
                actual = result_;
            });

            expect(actual.length).to.be.undefined;

            $httpBackend.flush();

            expect(actual.length).to.equal(expected.length);
        })

        it('should return a single site with id', function() {
            var expected = [{id: '1'}];
            var actual = [{}];

            $httpBackend.whenGET('/api/sites/1').respond(expected);

            siteResource.query({id:1}).$promise.then(function(result_) {
                actual = result_;
            });

            expect(actual[0].id).to.be.undefined;

            $httpBackend.flush();

            expect(actual.id).to.equal(expected.id);
        })
    });
});
