This is an tiny [**React Native**](https://reactnative.dev) project to show an issue between Detox and RNGH.

Follow the steps [here](https://github.com/facebook/react-native/blob/d859bd965e158060c0e3dcf3d852a92d32131b32/packages/react-native/template/README.md) to get started.

For now only iOS is shown.

# Reproducing the issue

## Build and test the app manually

In a shell, do:

```
yarn start
```

And then press i to deploy the app on a simulator.

Once the app started in the simulator, click on the yellow image: a log is printed for each tap and double tap.

## Build and test the app with detox

Then in another shell, with `yarn start` still running, and from the repo root:

```
cd DetoxApp
npx detox build --configuration ios.sim.debug
npx detox test --configuration ios.sim.debug
```

The test consists of two taps on the view and does not fail, but if you check the logs, only one tap is logged.
If you try to tap yourself in the app launched with detox, no taps are detected.
