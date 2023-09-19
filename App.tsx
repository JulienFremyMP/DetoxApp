import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
function App(): JSX.Element {
  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(_ => {
      console.log('onSingleTapEnd');
    });
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(_ => {
      console.log('onDoubleTapEnd');
    });
  const gestures = Gesture.Simultaneous(doubleTap, singleTap);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetector gesture={gestures}>
        <View style={styles.container} testID="background">
          <Image source={require('./background.jpg')} style={styles.image} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default App;
