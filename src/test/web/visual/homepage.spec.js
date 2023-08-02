import { loginPage } from "../../../pages/web/login";

async function getRegion(selector) {
  const element = await $(selector);
  const location = await element.getLocation();
  const size = await element.getSize();
  return {
    height: size.height,
    width: size.width,
    x: location.x,
    y: location.y,
  };
}

suite("Visual regression tests on the home page.", () => {
  setup(async () => {
    await loginPage.open();
    await loginPage.buttonLogin.waitForExist();
  });

  test("Displays logo on the home page.", async () => {
    let blockOutRegion = [];
    if (!browser.isMobile) {
      blockOutRegion.push(await getRegion("div#homepage-slider"));
    }
    const testOptions = {
      blockOut: blockOutRegion,
    };
    const results = browser.checkFullPageScreen(
      "fullPageCheckFolders",
      testOptions
    );
    console.log(results);
    expect(results.misMatchPercentage).to.lessThan(5);
  });
});
