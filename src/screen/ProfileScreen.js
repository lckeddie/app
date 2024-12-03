import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = ({ phoneNumber }) => {
  const connectG = () => {
    console.log('Connecting to Google...');
  };

  const connectF = () => {
    console.log('Connecting to Facebook...');
  };

  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/person.jpeg')}
      />
      <Text style={styles.detailsText}>Welcome to your profile!</Text>
      <TouchableOpacity style={styles.connectButton} onPress={connectF}>
        <Text style={styles.buttonText}>Press To Connect Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connectButton} onPress={connectG}>
        <Text style={styles.buttonText}>Press To Connect Google</Text>
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
  detailsText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 150, 
    height: 150, 
    borderRadius: 50,
    marginBottom: 20,
  },
  connectButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
