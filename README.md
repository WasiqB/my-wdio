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
- `fs-extra`

# Install Packages

```bash
$ npm install
```

# Run Tests on desktop chrome

```bash
$ npm test
```

# Visual Tests with `wdio-image-comparision-service`

## Run Tests on Android chrome

```bash
$ npm run test:android
```

## Run Tests on iPhone Safari

```bash
$ npm run test:ios
```

## Run Tests on Desktop Chrome

```bash
$ npm run test:visual
```

# Generate and Open Allure Report

```bash
$ npm run report
```