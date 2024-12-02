import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const MainScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  const userList = useSelector((state) => state.user.userList);

  const user = userList.find((user) => user.phoneNumber === phoneNumber);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Page" children={() => <HomeScreen phoneNumber={phoneNumber} />} />
      <Tab.Screen name="About Page" children={() => <AboutScreen phoneNumber={phoneNumber} />} />
      <Tab.Screen name="Profile Page" children={() => <ProfileScreen user={user} />} />
      <Tab.Screen
        name="Settings Page"
        children={({ navigation }) => (
          <SettingScreen phoneNumber={phoneNumber} navigation={navigation} />
        )}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
