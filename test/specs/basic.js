import { strictEqual } from 'assert';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        strictEqual(title, 'My Store');
    });
});