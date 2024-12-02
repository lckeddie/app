import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const DataScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(response.data);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch data.');
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Data:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataItem}>
            <Text style={styles.dataTitle}>{item.id}</Text>
            <Text style={styles.dataTitle}>{item.title}</Text>
            <Text style={styles.dataBody}>{item.url}</Text>
            <Text style={styles.dataBody}>{item.thumbnailUrl}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  dataItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  dataTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  dataBody: { fontSize: 14, color: '#333' },
});

export default DataScreen;
