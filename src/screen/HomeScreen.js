import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ phoneNumber }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>
        '{phoneNumber}' user Welcome to the ABC Master Card App!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20 },
  screenTitle: { fontSize: 24, fontWeight: 'bold' },
});

export default HomeScreen;
