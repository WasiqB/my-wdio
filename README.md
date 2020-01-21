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
- `spec`

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

## Run Tests on Android for Native App

```bash
$ npm run android
```

> Real device should be connected OR emulator should be up and running.

# Generate and Open Allure Report

```bash
$ npm run report
```