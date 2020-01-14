import { expect } from 'chai';
import { loginPage } from '../../../pages/login'

browser.setTimeout({ 'script': 60000 })
browser.setTimeout({ 'pageLoad': 60000 })
browser.setTimeout({ 'implicit': 60000 })

suite('Visual regression tests on the home page on Android.', () => {
  setup(() => {
    loginPage.open();
    loginPage.buttonLogin.waitForExist();
  });

  test('Displays logo on the home page.', () => {
    const results = browser.checkFullPageScreen('fullPageCheckFolders');
    console.log(results);
    expect(results.misMatchPercentage).to.lessThan(1);
  });
});