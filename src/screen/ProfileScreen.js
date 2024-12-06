import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const gotoTut1 = async () => {
    try {
      navigation.navigate('Tutorial 1');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed', 'Something went wrong. Please try again.');
    }
  };
  const gotoTut2 = async () => {
    try {
      navigation.navigate('Tutorial 2');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.tutorialButton} onPress={gotoTut1}>
        <Text style={styles.buttonText}>Tutorial 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tutorialButton} onPress={gotoTut2}>
        <Text style={styles.buttonText}>Tutorial 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialButton: {
    alignItems: 'left',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
