import { homeScreen } from '../../pages/mobile/home.screen';
import loginScreen from '../../pages/mobile/login.screen';

suite('Visual regression tests on the Login page.', () => {
  setup(() => {
    homeScreen.waitForLoad()
      .compareScreen()
      .openLogin();
  });

  test('Does Login.', () => {
    loginScreen.waitForLoad()
      .compareScreen()
      .doLogin('test@webdriver.io', 'Test1234!');
  });
});