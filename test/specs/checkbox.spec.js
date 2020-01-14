describe('checkboxes', function() {

    it('checkbox 2 should be enabled', function*() {
        yield browser.url('/checkboxes');
        yield browser.isSelected('#checkbo input:last-Child').then(function(isSelected) {
            expect(isSelected).toBe(true);
        });
    });

    it('checkbox 1 should be enabled after clicking on it', function*() {
        yield browser.url('/checkboxes');
        yield browser.isSelected('#checkboxes input:first-Child').then(function(isSelected) {
            expect(isSelected).toBe(false);
        });
        yield browser.click('#checkboxes input:first-Child');
        yield browser.isSelected('#checkboxes input:first-Child').then(function(isSelected) {
            expect(isSelected).toBe(true);
        });
    });

});
