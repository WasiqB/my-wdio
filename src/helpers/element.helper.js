class ElementHelper {
  static async $(selector) {
    let element = undefined;
    if (typeof selector === "string") {
      element = await browser.$(selector);
    }
    element = await browser.$(
      selector.all || (driver.isAndroid ? selector.android : selector.ios)
    );
    return element;
  }
}
export default ElementHelper;
