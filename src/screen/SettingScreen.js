import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const SettingScreen = ({ phoneNumber, navigation }) => {
  const handleLogout = async () => {
    try {
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('Logout Failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20 },
  screenTitle: { fontSize: 24, fontWeight: 'bold' },
  logoutButton: {
    bottom: '-95%',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
  },
  logoutButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default SettingScreen;
