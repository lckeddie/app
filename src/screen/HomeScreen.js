import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReloadIcon from '../assets/reload.png';
import BillIcon from '../assets/bill.png';
import SecurityIcon from '../assets/security.jpg';
import LockIcon from '../assets/lock.png';


const HomeScreen = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'Visa Card', balance: '0.00 USD ', balancer: '= 0.00 RMB', number: '4383 **** **** 1234', expiration: '09/2026', logo: 'https://banner2.cleanpng.com/20180920/evr/kisspng-subscriber-identity-module-apple-sim-iphone-intern-cosas-para-photoscape-imgenes-para-photoscape-p-5ba3f97f83fde8.5864750415374728955407.jpg' },
    { id: 2, name: 'Master Card', balance: '7.00 USD ', balancer: '= 50.96 RMB', number: '6264 **** **** 5678', expiration: '10/26', logo: 'https://banner2.cleanpng.com/20180920/evr/kisspng-subscriber-identity-module-apple-sim-iphone-intern-cosas-para-photoscape-imgenes-para-photoscape-p-5ba3f97f83fde8.5864750415374728955407.jpg' },
  ]);

  const [notificationIndex, setNotificationIndex] = useState(0);
  const notifications = [
    "You have new notifications",
    "Your card balance is low",
    "A new transaction was made",
    "Your security code has been updated",
  ];

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>ABC Master Card</Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => alert('Register Card clicked!')}>
          <Text style={styles.registerButtonText}>Register Card</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Text style={styles.cardInfoValueH}>{card.name}</Text>
            <Text style={styles.cardInfoValue}>{card.balance}</Text>
            <Text style={styles.cardInfoValueR}>{card.balancer}</Text>
            <Text style={styles.cardNumber}>{card.number}</Text>
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
              </View>
              <Image source={{ uri: card.logo }} style={styles.logo} />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.notificationContainer}>
        <Icon name="notifications-active" size={24} color="black" style={styles.notificationIcon} />
        <Animated.Text style={[styles.notificationText, { opacity: fadeAnim }]}>
          {notifications[notificationIndex]}
        </Animated.Text>
      </View>

      <View style={styles.tabButtonContainer}>
        <TouchableOpacity onPress={() => alert('Reload Card clicked!')}>
          <Image source={ReloadIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Reload Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Bill Details clicked!')}>
          <Image source={BillIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Bill Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Security Code clicked!')}>
          <Image source={SecurityIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Security Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Lock Screen clicked!')}>
          <Image source={LockIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Lock Screen</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.adContainer}>
        <Text style={styles.adText}>Ad Placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '20%',
  },
  registerButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginHorizontal: 30,
    width: 300,
    height: 180,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  notificationContainer: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  tabButtonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 5,
    width: 360,
    height: 100,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tabButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  adContainer: {
    marginBottom: '10%',
    width: 360,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  adText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  cardInfoValueH: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardInfoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardInfoValueR: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 30,
  },
  carouselContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  tabButtonIcon: {
    margin: 'auto',
    width: 40,
    height: 40,
  },
});

export default HomeScreen;
