describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should jump to the /sites path when / is accessed', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/sites");
  });

  it('should have a working /sites route', function() {
    browser().navigateTo('#/sites');
    expect(browser().location().path()).toBe("/sites");
  });

  it('should have a working /sites/ID route', function() {
    browser().navigateTo('#/sites/10');
    expect(browser().location().path()).toBe("/sites/10");
  });

});

