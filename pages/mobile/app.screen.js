import ElementHelper from '../../helpers/element.helper';
import { expect } from 'chai';

const SELECTORS = {
  HOME: {
    all: '~Home'
  },
  WEB_VIEW: {
    all: '~WebView'
  },
  LOGIN: {
    all: '~Login'
  },
  FORMS: {
    all: '~Forms'
  },
  SWIPE: {
    all: '~Swipe'
  }
}

export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  compareScreen() {
    const results = browser.compareScreen(this.constructor.name);
    expect(results.misMatchPercentage).to.lessThan(1);
    return this;
  }

  openHome() {
    return ElementHelper.$(SELECTORS.HOME).click();
  }

  openWebView() {
    return ElementHelper.$(SELECTORS.WEB_VIEW).click();
  }

  openLogin() {
    return ElementHelper.$(SELECTORS.LOGIN).click();
  }

  openForms() {
    return ElementHelper.$(SELECTORS.FORMS).click();
  }

  openSwipe() {
    return ElementHelper.$(SELECTORS.SWIPE).click(); 
  }

  waitForLoad(isVisible = true) {
    ElementHelper.$(this.selector).waitForDisplayed(10000, !isVisible);
    return this;
  }
}