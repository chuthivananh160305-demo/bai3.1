import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
      <Text style={styles.text}>Hello World!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // căn giữa theo chiều dọc
    alignItems: 'center',     // căn giữa theo chiều ngang
  },
  square: {
    width: 250,
    height: 250,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});