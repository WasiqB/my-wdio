import AppScreen from './app.screen';
import ElementHelper from '../../helpers/element.helper';

const SELECTTORS = {
  LOGIN_SCREEN: {
    android: '~Login-screen'
  },
  EMAIL: {
    android: '~input-email'
  },
  PASSWORD: {
    android: '~input-password'
  },
  LOGIN_BUTTON: {
    android: '~button-LOGIN'
  }
};

class LoginScreen extends AppScreen {
  constructor() {
    super(SELECTTORS.LOGIN_SCREEN);
  }

  get email() {
    return ElementHelper.$(SELECTTORS.EMAIL);
  }

  get password() {
    return ElementHelper.$(SELECTTORS.PASSWORD);
  }

  get loginButton() {
    return ElementHelper.$(SELECTTORS.LOGIN_BUTTON);
  }

  doLogin(userId, userPass) {
    this.email.setValue(userId);
    this.password.setValue(userPass);
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    this.loginButton.click();
  }
}
export default new LoginScreen();