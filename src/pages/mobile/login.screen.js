import AppScreen from "./app.screen";
import ElementHelper from "../../helpers/element.helper";

const SELECTTORS = {
  LOGIN_SCREEN: {
    all: "~Login-screen",
  },
  EMAIL: {
    all: "~input-email",
  },
  PASSWORD: {
    all: "~input-password",
  },
  LOGIN_BUTTON: {
    all: "~button-LOGIN",
  },
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

  async doLogin(userId, userPass) {
    await this.email.setValue(userId);
    await this.password.setValue(userPass);
    if (await driver.isKeyboardShown()) {
      await driver.hideKeyboard();
    }
    await this.loginButton.click();
  }
}
export default new LoginScreen();
