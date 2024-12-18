import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Animated, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReloadIcon from '../assets/reload.png';
import BillIcon from '../assets/bill.png';
import SecurityIcon from '../assets/security.png';
import LockIcon from '../assets/lock.png';
import Chip from '../assets/chip.png';
import CardBackground from '../assets/cardbackground.jpg';

import { Badge } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const gotoReload = async () => {
    try {
      navigation.navigate('Reload Card');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };
  const gotoBill = async () => {
    try {
      navigation.navigate('Bill Details');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };
  const gotoSecurityCode = async () => {
    try {
      navigation.navigate('Security Code');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };
  const gotoLockScreen = async () => {
    try {
      navigation.navigate('Lock Screen');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const [cards, setCards] = useState([
    { id: 1, name: 'Visa Card', balance: '0.00 USD', balancer: '= 0.00 RMB', number: '4383 **** **** 1234', expiration: '09/2026', logo: Chip, showBalance: true },
    { id: 2, name: 'Master Card', balance: '7.00 USD', balancer: '= 50.96 RMB', number: '6264 **** **** 5678', expiration: '10/26', logo: Chip, showBalance: true },
    { id: 3, name: 'Card', balance: '7.00 USD', balancer: '= 50.96 RMB', number: '1168 **** **** 5678', expiration: '10/26', logo: Chip, showBalance: true },
  ]);

  const [notifications, setNotifications] = useState([
    "Welcome",
    "You have new notifications",
    "Your card balance is low",
    "A new transaction was made",
    "Your security code has been updated",
    "GoodBye",
    "Have a nice day",
  ]);
  const [notificationCount, setNotificationCount] = useState(notifications.length);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setNotifications((prevNotifications) => {
          const updatedNotifications = [...prevNotifications.slice(1), prevNotifications[0]];
          setNotificationCount(updatedNotifications.length);
          return updatedNotifications;
        });
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const toggleBalanceVisibility = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, showBalance: !card.showBalance } : card
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
        pagingEnabled
      >
        {cards.map((card) => (
          <ImageBackground
            key={card.id}
            source={CardBackground}
            style={styles.cardContainer}
            imageStyle={styles.cardImage}
          >
            <Text style={styles.cardInfoValueH}>{card.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.cardInfoValue}>
                {card.showBalance ? card.balance : '****'}
              </Text>
              <TouchableOpacity onPress={() => toggleBalanceVisibility(card.id)}>
                <Icon
                  name={card.showBalance ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardInfoValueR}>
              {card.showBalance ? card.balancer : '****'}
            </Text>
            <Text style={styles.cardNumber}>{card.number}</Text>
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
              </View>
              <Image source={card.logo} style={styles.logo} />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={styles.notificationContainer}>
        <View style={styles.iconBadgeContainer}>
          {notificationCount > 0 && (
            <Badge
              value={notificationCount}
              status="error"
              containerStyle={styles.badgeContainer}
            />
          )}
          <Icon name="notifications-active" size={24} color="black" style={styles.notificationIcon} />
        </View>
        <Animated.Text style={[styles.notificationText, { opacity: fadeAnim }]}>
          {notifications[0]}
        </Animated.Text>
      </View>

      <View style={styles.tabButtonContainer}>
        <TouchableOpacity onPress={gotoReload}>
          <Image source={ReloadIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Reload Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoBill}>
          <Image source={BillIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Bill Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoSecurityCode}>
          <Image source={SecurityIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Security Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoLockScreen}>
          <Image source={LockIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Lock Screen</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.adContainer}>
        <Text style={styles.adText}>Ad Placeholder</Text>
      </View>
    </SafeAreaView>
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
    marginHorizontal: 'auto',
    width: 350,
    height: 180,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  cardImage: {
    borderRadius: 20,
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
    marginLeft: 10,
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
    elevation: 10,
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
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
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
    marginVertical: 20,
    alignItems: 'center',
  },
  tabButtonIcon: {
    margin: 'auto',
    width: 40,
    height: 40,
  },
  iconBadgeContainer: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});

export default HomeScreen;
