import { expect } from 'chai';

suite('webdriver.io page', () => {
    test('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        expect(title).to.equal('My Store');
    });
});