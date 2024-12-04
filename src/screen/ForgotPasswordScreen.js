import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../redux/actions';

const ForgotPasswordScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  const handleResetPassword = () => {
    if (!phoneNumber.trim() || !newPassword.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const userExists = userList.some((user) => user.phoneNumber === phoneNumber);

    if (userExists) {
      dispatch(updatePassword(phoneNumber, newPassword));
      Alert.alert('Success', 'Password has been reset.');
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Phone number not found.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>New Password:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Enter your new password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handleResetPassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginTop: 10 , marginLeft: 15},
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonContainer: { marginTop: 20 },
});

export default ForgotPasswordScreen;
