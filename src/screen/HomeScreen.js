import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

const HomeScreen = ({ phoneNumber }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const spinButton = () => {
    rotateValue.setValue(0);
  
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 0.7,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 7500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      rotateValue.setValue(0);
    });
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>
        {phoneNumber} user, Welcome to the ABC Master Card App!
      </Text>
      <Animated.Image
        style={[styles.tinyLogo, animatedStyle]}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <TouchableOpacity style={styles.spinButton} onPress={spinButton}>
        <Text style={styles.buttonText}>Press To Spin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  screenTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  tinyLogo: { width: 50, height: 50, marginBottom: 20 },
  spinButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius: 20,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;