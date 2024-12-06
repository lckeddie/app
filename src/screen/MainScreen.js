import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const MainScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  const userList = useSelector((state) => state.user.userList);

  const user = userList.find((user) => user.phoneNumber === phoneNumber);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        children={() => <HomeScreen phoneNumber={phoneNumber} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        children={() => <AboutScreen phoneNumber={phoneNumber} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tutorial"
        children={() => <ProfileScreen user={user} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        children={({ navigation }) => (
          <SettingScreen phoneNumber={phoneNumber} navigation={navigation} />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
