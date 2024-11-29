import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ phoneNumber }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.detailsText}>Welcome to your profile!</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20 },
  detailsText: { fontSize: 20, marginTop: 10 },
});

export default ProfileScreen;
