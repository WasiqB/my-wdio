class ElementHelper {
  static $(selector) {
    var element = undefined;
    if (typeof selector === 'string') {
      element = browser.$(selector);
    } 
    element = browser.$(driver.isAndroid ? selector.android : selector.ios);
    return element;
  }
}
export default ElementHelper;