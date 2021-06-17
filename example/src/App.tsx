import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hoverable } from 'react-native-hoverable';

export default function App() {
  return (
    <View style={styles.container}>
      <Hoverable
        onMouseEnter={() => console.log('onMouseEnter')}
        onMouseLeave={() => console.log('onMouseLeave')}
        onMouseMove={() => console.log('onMouseMove')}
        style={({ hovered }) => [
          styles.box,
          { backgroundColor: hovered ? 'red' : 'green' },
        ]}
      />
      <Hoverable style={styles.box}>
        {({ hovered }) => (
          <Text style={{ color: hovered ? 'green' : 'red' }}>Hover World!</Text>
        )}
      </Hoverable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
});
