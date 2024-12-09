import React, { useState } from 'react';
import { Text, ImageBackground, TextInput, Button, Alert, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/actions';
import notifee from '@notifee/react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);

  const showNotification = async (title, body) => {
    //await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
      },
    });
  };

  const LoginBtnPress = async () => {
    if (phoneNumber.trim() && password.trim()) {
      if (phoneNumber === '888' && password === 'admin') {
        await showNotification('Login Success', 'Welcome Admin!');
        navigation.replace('Admin');
      } else if (phoneNumber === '666' && password === 'data') {
        await showNotification('Login Success', 'Welcome Data User!');
        navigation.replace('Data')
      } else if (
        userList.some(
          (user) => user.phoneNumber === phoneNumber && user.password === password
        )
      ) {
        await showNotification('Login Success', 'Welcome to ABC Master Card!');
        navigation.replace('Main', { phoneNumber });
      } else {
        Alert.alert('Login Failed', 'Invalid phone number or password.');
      }
    } else {
      Alert.alert('Login Failed', 'Please enter your phone number and password.');
    }
  };

  const RegisterBtnPress = () => {
    if (phoneNumber.trim() && password.trim()) {
      const userExists = userList.some((user) => user.phoneNumber === phoneNumber);

      if (phoneNumber === '888' || phoneNumber === '666') {
        Alert.alert('Register Failed', 'This phone number cannot be registered.');
      } else if (userExists) {
        Alert.alert('Register Failed', 'Phone number already registered.');
      } else {
        dispatch(addUser(phoneNumber, password));
        Alert.alert('Register Success', 'You can login to ABC Master Card App now.');
        setPhoneNumber('');
        setPassword('');
      }
    } else {
      Alert.alert('Register Failed', 'Please enter your phone number and password.');
    }
  };

  const ForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground
      source={require('../assets/wallpaper.jpg')}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>Welcome to ABC Master Card!!!</Text>

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter Your Phone Number Here"
        placeholderTextColor="lightgray"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter Your Password Here"
        placeholderTextColor="lightgray"
      />

      <View style={styles.buttonContainer}>
        <Button onPress={LoginBtnPress} title="Login" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={RegisterBtnPress} title="Register" />
      </View>
      <TouchableOpacity onPress={ForgotPasswordPress}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  title: { marginTop: 10, fontSize: 40, color: 'white' },
  subtitle: { fontSize: 40, color: 'white' },
  label: { marginTop: 20, fontSize: 20, color: 'white' },
  input: {
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  buttonContainer: { marginTop: 20, backgroundColor: 'lightblue', borderRadius: 25 },
  forgotPassword: { marginTop: 20, fontSize: 16, color: 'lightblue', textAlign: 'center' },
});

export default LoginScreen;
