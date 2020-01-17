import { expect } from 'chai';
import { loginPage } from '../../../pages/login'

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
    loginPage.buttonLogin.waitForExist();
  });

  test('Displays logo on the home page.', () => {
    var blockOutRegion = [];
    if (!browser.isMobile) {
      blockOutRegion.push(getRegion('div#homepage-slider'));
    }
    const testOptions = {
      blockOut: blockOutRegion,
    };
    const results = browser.checkFullPageScreen('fullPageCheckFolders', testOptions);
    console.log(results);
    expect(results.misMatchPercentage).to.lessThan(5);
  });
});