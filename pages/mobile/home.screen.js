import AppScreen from './app.screen';

const SELECTORS = {
  HOME_SCREEN: {
    all: '~Home-screen'
  }
};

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HOME_SCREEN);
  }
}

export const homeScreen = new HomeScreen();