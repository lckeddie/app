import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CardinfoScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Welcome to CardinfoScreen</Text>
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

export default CardinfoScreen;