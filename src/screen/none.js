import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, Image, ActivityIndicator } from 'react-native';
import CoinIcon from '../assets/coin.png';

const AboutScreen = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id.toString(),
          text: item.name,
          amount: item.email,
        }));
        setDetails(formattedData);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch data from API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




















  
};