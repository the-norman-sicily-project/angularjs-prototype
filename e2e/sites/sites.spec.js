describe ('e2e: main', function() {

    beforeEach(function() {
        browser.get('/');
    });

    describe("E2E: Testing Routes", function() {
        it('should have a working /sites route', function() {
            browser.get('#/sites');
            expect(browser.getCurrentUrl()).to.eventually.be.equal(browser.baseUrl + '/sites');
        });

        it('should have a working /sites/ID route', function() {
            browser.get('#/sites/10');
            expect(browser.getCurrentUrl()).to.eventually.be.equal(browser.baseUrl + '/sites/10');
        });
    });

});

