import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminScreen = () => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  const handleDelete = async (phoneNumber) => {
    try {
      await AsyncStorage.removeItem(phoneNumber); 
      dispatch(deleteUser(phoneNumber));
    } catch (error) {
      console.error('Failed to remove user from AsyncStorage', error);
    }
  };

  return (
    <View style={styles.adminContainer}>
      <Text style={styles.adminTitle}>Already Got '{userList.length}' Registered Users</Text>
      <FlatList
        data={userList}
        keyExtractor={(item) => item.phoneNumber}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userText}>
              Phone Number: {item.phoneNumber} | Password: {item.password}
            </Text>
            <Button
              title="Delete"
              onPress={() => handleDelete(item.phoneNumber)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  adminContainer: { flex: 1, marginLeft: 0 },
  adminTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginLeft: 10, marginTop: '10' },
  userContainer: { marginBottom: 20 },
  userText: { fontSize: 14, marginLeft: 10, marginBottom: 2 },
});

export default AdminScreen;
