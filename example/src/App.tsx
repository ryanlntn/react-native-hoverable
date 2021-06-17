import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hoverable, Pressable } from 'react-native-hoverable';

export default function App() {
  return (
    <View style={styles.container}>
      <Hoverable
        onMouseEnter={() => console.log('onMouseEnter')}
        onMouseLeave={() => console.log('onMouseLeave')}
        onMouseMove={() => console.log('onMouseMove')}
        style={({ hovered }) => [
          { padding: hovered ? 20 : 0 },
          { backgroundColor: 'purple' },
        ]}
      >
        {({ hovered }) => (
          <View
            style={[
              {
                backgroundColor: hovered ? 'red' : 'green',
              },
              styles.box,
            ]}
          />
        )}
      </Hoverable>
      <Hoverable style={styles.box}>
        {({ hovered }) => (
          <Text style={{ color: hovered ? 'green' : 'red' }}>Hover World!</Text>
        )}
      </Hoverable>
      <Pressable
        style={({ pressed, hovered }) => [
          styles.box,
          { backgroundColor: pressed ? 'blue' : hovered ? 'red' : 'green' },
        ]}
      >
        {({ hovered, pressed }) => (
          <Text
            style={{
              color: pressed ? 'purple' : hovered ? 'green' : 'red',
              textAlign: 'center',
            }}
          >
            Pressable World!
          </Text>
        )}
      </Pressable>
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
