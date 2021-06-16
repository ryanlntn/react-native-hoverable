import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Hoverable } from 'react-native-hoverable';

export default function App() {
  return (
    <View style={styles.container}>
      <Hoverable
        onMouseEnter={() => console.log('onMouseEnter')}
        onMouseLeave={() => console.log('onMouseLeave')}
        onMouseMove={() => console.log('onMouseMove')}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#32a852',
    width: 100,
    height: 100,
  },
});
