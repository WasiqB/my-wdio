# my-wdio

My first try on webdriverio.

# Packages used

- `wdio-cli`
- `babel`
- `mocha`
- `chai`
- `allure-commandline`
- `webdriverio`
- `wdio-image-comparison-service`
- `wdio-native-app-compare-service`
- `fs-extra`

# Install Packages

```bash
$ npm install
```

# Run Functional Tests on desktop chrome

```bash
$ npm test
```

# Visual Tests with `wdio-image-comparision-service`

## Run Tests on Android chrome

```bash
$ npm run web:android
```

## Run Tests on iPhone Safari

```bash
$ npm run web:ios
```

## Run Tests on Desktop Chrome

```bash
$ npm run web:chrome
```

# Generate and Open Allure Report

```bash
$ npm run report
```