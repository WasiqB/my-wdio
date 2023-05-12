import ElementHelper from "../../helpers/element.helper";
import { expect } from "chai";

const SELECTORS = {
  HOME: {
    all: "~Home",
  },
  WEB_VIEW: {
    all: "~WebView",
  },
  LOGIN: {
    all: "~Login",
  },
  FORMS: {
    all: "~Forms",
  },
  SWIPE: {
    all: "~Swipe",
  },
};

export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  compareScreen() {
    const results = browser.compareScreen(this.constructor.name);
    expect(results.misMatchPercentage).to.lessThan(1);
    return this;
  }

  async openHome() {
    return await ElementHelper.$(SELECTORS.HOME).click();
  }

  async openWebView() {
    return await ElementHelper.$(SELECTORS.WEB_VIEW).click();
  }

  async openLogin() {
    return await ElementHelper.$(SELECTORS.LOGIN).click();
  }

  async openForms() {
    return await ElementHelper.$(SELECTORS.FORMS).click();
  }

  async openSwipe() {
    return await ElementHelper.$(SELECTORS.SWIPE).click();
  }

  async waitForLoad(isVisible = true) {
    await ElementHelper.$(this.selector).waitForDisplayed(10000, !isVisible);
    return this;
  }
}
