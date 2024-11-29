import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = ({ phoneNumber }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.detailsText}>This is the ABC Master Card application.</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20 },
  detailsText: { fontSize: 20, marginTop: 10 },
});

export default AboutScreen;
