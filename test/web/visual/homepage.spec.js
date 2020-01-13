// import { path } from 'path';
import { expect } from 'chai';
import { loginPage } from '../../../pages/login'
// import { homePage } from '../../../pages/home'

suite('Visual regression tests on the home page.', () => {
  setup(() => {
    loginPage.open();
  });

  var path = require('path');

  test('Displays logo on the home page.', () => {
    const testOptions = {
        actualFolder: path.join(process.cwd(), './.tmp/checkActual'),
        baselineFolder: path.join(process.cwd(), `./localBaseline/checkBaseline`),
        diffFolder: path.join(process.cwd(), './.tmp/testDiff'),
        returnAllCompareData: true
    };
    const results = browser.checkFullPageScreen('fullPageCheckFolders', testOptions);
    console.log(results);
    expect(results.misMatchPercentage).to.lessThan(5);
  });

//   test('Displays empty cart on the home page.', () => {
//     expect(browser.checkElement(homePage.cart, this.test.title)).to.equal(0);
//   });
});