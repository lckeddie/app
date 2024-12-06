import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tutorial2 = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Welcome to Tutorial 2</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Tutorial2;