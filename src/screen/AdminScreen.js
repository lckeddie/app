import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminScreen = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      try {
        const existingUsers = await AsyncStorage.getItem('users');
        setUsers(existingUsers ? JSON.parse(existingUsers) : {});
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <View style={styles.adminContainer}>
      <Text style={styles.adminTitle}>Already Registered Users</Text>
      <FlatList
        data={Object.entries(users)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <Text style={styles.userText}>
            Phone Number: {item[0]} | Password: {item[1]}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  adminContainer: { flex: 1, marginLeft: 20, marginTop: 10 },
  adminTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  userText: { fontSize: 14, marginBottom: 10 },
});

export default AdminScreen;
