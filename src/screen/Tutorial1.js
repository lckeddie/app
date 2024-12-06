import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import Picture from '../assets/longpic.jpg';

export const Tutorial1 = () => {
  return (
    <ScrollView>
      <Image source={Picture} style={{ width: 415, height: 1500 }} />
    </ScrollView>
  );
};

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

export default Tutorial1;
