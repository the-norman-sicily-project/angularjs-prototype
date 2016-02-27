/* jshint expr:true */

'use strict';

describe('Sites route test', function() {
    var expectedSites = [{id: '1', type:'atype'}, {id: '2', type:'btype'}];

    beforeEach(function() {
        var getSitesPromise, getSitePromise;
        module('siciliaNormannaApp', function($provide) {
            var SiteServiceMock = {
                getSites: function() {
                    return getSitesPromise();
                },
                getSite: function(id) {
                    return getSitePromise(id);
                }
            };

            $provide.value('SiteService', SiteServiceMock);
        });
        inject(function($q) {
            getSitesPromise = function() {
                var deferred = $q.defer();
                deferred.resolve(expectedSites);
                return deferred.promise;
            };

            getSitePromise = function(id) {
                var deferred = $q.defer();
                deferred.resolve({id: id});
                return deferred.promise;
            };
        });
    });

    var $location, $rootScope, $state, siteService, $httpBackend;

    beforeEach(inject(function(_$rootScope_, _$state_, _$location_, _$injector_, _$httpBackend_, _$templateCache_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
        $location = _$location_;
        $httpBackend = _$httpBackend_;
        siteService = _$injector_.get('SiteService');

        // We need to add the template entry into the templateCache if we ever
        // specify a templateUrl
        _$templateCache_.put('path/to/template.html', '');
    }));

    describe('state: sites', function() {
        var stateName = 'sites';

        it('should respond to URL', function() {
            expect($state.href(stateName)).to.equal('/sites');
        });

        it('should be abstract state and url /sites, correct template URL and controller', function() {
            var state = $state.get(stateName);
            expect(state.name).to.equal(stateName);
            expect(state.abstract).to.be.truthy;
            expect(state.url).to.equal('/sites');
            expect(state.views[''].controller).to.equal('SitesController');
            expect(state.views[''].templateUrl).to.equal('app/sites/sites.html');
            expect(state.resolve.sitesData).to.be.defined;
            expect(state.resolve.sitesByTypes).to.be.defined;
        });

        describe('sitesData', function() {
            it('should return resolved data', function() {
                var state = $state.get(stateName);
                var actualSites = null;
                var sitesDataPromise = state.resolve.sitesData(siteService);
                sitesDataPromise.then(function(result) {
                    actualSites = result;
                });
                $httpBackend.expectGET('app/sites/sites.html').respond(200);
                $location.path('/sites');
                $rootScope.$digest();
                expect(actualSites).to.equal(expectedSites);
            });
        });

        describe('sitesByTypes', function() {
            it('should return resolved data', function() {
                var state = $state.get(stateName);
                var actualSites = null;
                var sitesDataPromise = state.resolve.sitesData(siteService);
                sitesDataPromise.then(function(result) {
                    actualSites = state.resolve.sitesByTypes(result);
                });
                $httpBackend.expectGET('app/sites/sites.html').respond(200);
                $location.path('/sites');
                $rootScope.$digest();
                expect(actualSites).to.deep.equal(_.groupBy(expectedSites, 'type'));
            });
        });
    });

    describe('state: sites.list', function() {
        var stateName = 'sites.list';

        it('should respond to URL', function() {
            expect($state.href(stateName)).to.equal('/sites');
        });

        it('should be correct url, template URL and controller', function() {
            var state = $state.get(stateName);
            expect(state.name).to.equal(stateName);
            expect(state.abstract).to.be.falsy;
            expect(state.url).to.equal('');
            expect(state.views[''].controller).to.be.undefined;
            expect(state.views[''].templateUrl).to.equal('app/sites/sites-list.html');
        });
    });

    describe('state: sites.detail', function() {
        var stateName = 'sites.detail';

        it('should respond to URL', function() {
            expect($state.href(stateName)).to.equal('/sites/');
        });

        it('should be correct url, template URL and controller', function() {
            var state = $state.get(stateName);
            expect(state.name).to.equal(stateName);
            expect(state.abstract).to.be.falsy;
            expect(state.url).to.equal('/:id');
            expect(state.views[''].controller).to.equal('SiteController');
            expect(state.views[''].templateUrl).to.equal('app/sites/sites-detail.html');
            expect(state.views['details-monastery@sites.detail'].templateUrl).to.equal('app/sites/sites-details-monastery.html');
            expect(state.views['details-fortification@sites.detail'].templateUrl).to.equal('app/sites/sites-details-fortification.html');
            expect(state.resolve.siteData).to.be.defined;
        });

         describe('siteData', function() {
            it('should return resolved data', function() {
                var state = $state.get(stateName);
                var actualSites = null;
                var siteDataPromise = state.resolve.siteData(siteService, {id: 1});
                siteDataPromise.then(function(result) {
                    actualSites = result;
                });
                $httpBackend.expectGET('app/sites/sites.html').respond(200);
                $location.path('/sites/1');
                $rootScope.$digest();
                expect(actualSites).to.deep.equal({id: 1});
            });
        });
    });
});

