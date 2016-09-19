/* jshint expr:true */

'use strict';

describe('Service: Site Resource', function() {
  var siteResource, $httpBackend;

  beforeEach(module('siciliaNormannaApp'));

  beforeEach(inject(function(_$httpBackend_, SiteResource) {
    $httpBackend = _$httpBackend_;
    siteResource = SiteResource;
  }));

  describe('get and query', function() {
    it('query should respond with all sites', function() {
      var expected = [{id: '1'}, {id: '2'}];
      var actual = {};

      $httpBackend.whenGET('/api/sites').respond(expected);

      siteResource.query().$promise.then(function(result_) {
        actual = result_;
      });

      expect(actual.length).to.be.undefined;

      $httpBackend.flush();

      expect(actual.length).to.equal(expected.length);
    });

    it('get should return a single site with id', function() {
      var expected = {id: '1'};
      var actual = {};

      $httpBackend.whenGET('/api/sites/1').respond(expected);

      siteResource.get({id: '1'}).$promise.then(function(result_) {
        actual = result_;
      });

      expect(actual.id).to.be.undefined;

      $httpBackend.flush();

      expect(actual.id).to.equal(expected.id);
    });
  });
});

describe('Service: SiteService', function() {
  var expectedSites = [{id: '1'}, {id: '2'}];
  var expectedSite = {id: '1'};

  beforeEach(function() {
    var queryPromise, getPromise;
    module('siciliaNormannaApp', function($provide) {
      var SiteResourceMock = {
        query() {
          var result = {$promise: queryPromise()};
          return result;
        },
        get(id) {
          return {$promise: getPromise(id)};
        }
      };

      $provide.value('SiteResource', SiteResourceMock);
    });
    inject(function($q) {
      queryPromise = function() {
        var deferred = $q.defer();
        deferred.resolve(expectedSites);
        return deferred.promise;
      };

      getPromise = function() {
        var deferred = $q.defer();
        deferred.resolve(expectedSite);
        return deferred.promise;
      };
    });
  });

  describe('getSites', function() {
    it('should return a promise which resolves to expected sites', inject(function($rootScope, SiteService) {
      var actualSites = null;
      SiteService.getSites().then(function(result) {
        actualSites = result;
      });
      $rootScope.$digest();
      expect(actualSites).to.equal(expectedSites);
    }));
  });

  describe('getSite', function() {
    it('should return a promise which resolves to an expected site', inject(function($rootScope, SiteService) {
      var actualSite = null;
      SiteService.getSite().then(function(result) {
        actualSite = result;
      });
      $rootScope.$digest();
      expect(actualSite).to.equal(expectedSite);
    }));
  });
});
