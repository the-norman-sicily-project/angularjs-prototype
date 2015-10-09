'use strict';

describe('Sites route test', function() {
    var $q, $rootScope, $state, $injector, state_name = 'sites';
    var SiteServiceMock = {};

    beforeEach(module('siciliaNormannaApp'), function($provide) {
        $provide.service('SiteService', SiteServiceMock);
        SiteServiceMock.query = function() {
            //return $promise: $q.when({});
            return null;
        };
    });

    beforeEach(inject(function(_$q_, _$rootScope_, _$state_, _$injector_, $templateCache) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;

            // We need to add the template entry into the templateCache if we ever
            // specify a templateUrl
            $templateCache.put('path/to/template.html', '');
        }));

    it('should respond to URL', function() {
        expect($state.href(state_name)).to.equal('/sites');
    });

    it('should be abstract state and url /sites', function() {
        var state = $state.get(state_name);
        expect(state.name).to.equal(state_name);
        expect(state.abstract).to.be.truthy;
        expect(state.url).to.equal('/sites');
    });

    it('should be fulfilled', function() {
        var state = $state.get(state_name);
        return expect(state.resolve.sitesData).to.be.fullfilled;
    });
});

