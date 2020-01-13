// import { path } from 'path';
import { expect } from 'chai';
import { loginPage } from '../../../pages/login'
// import { homePage } from '../../../pages/home'

function getRegion(selector) {
  const element = $(selector);
  const location = element.getLocation();
  const size = element.getSize();
  return {
    height: size.height,
    width: size.width,
    x: location.x,
    y: location.y
  };
}

suite('Visual regression tests on the home page.', () => {
  setup(() => {
    loginPage.open();
  });

  test('Displays logo on the home page.', () => {
    const testOptions = {
      blockOut: [
        getRegion('div#homepage-slider')
      ],
    };
    const results = browser.checkFullPageScreen('fullPageCheckFolders', testOptions);
    console.log(results);
    expect(results.misMatchPercentage).to.lessThan(5);
  });

//   test('Displays empty cart on the home page.', () => {
//     expect(browser.checkElement(homePage.cart, this.test.title)).to.equal(0);
//   });
});