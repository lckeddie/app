import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import LoginScreen from './src/screen/LoginScreen';
import MainScreen from './src/screen/MainScreen';
import AdminScreen from './src/screen/AdminScreen';
import DataScreen from './src/screen/DataScreen';
import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPasswordScreen from './src/screen/ForgotPasswordScreen';
import Tutorial1 from './src/screen/Tutorial1';
import Tutorial2 from './src/screen/Tutorial2';
import LogoutScreen from './src/screen/LogoutScreen';
import CardinfoScreen from './src/screen/CardinfoScreen';
import MycardScreen from './src/screen/MycardScreen';
import GetcardScreen from './src/screen/GetcardScreen';
import EmailScreen from './src/screen/EmailScreen';
import PhonenumberScreen from './src/screen/PhonenumberScreen';
import RNAScreen from './src/screen/RNAScreen';
import SecurityScreen from './src/screen/SecurityScreen';
import CustomerserviceScreen from './src/screen/CustomerserviceScreen';
import ReloadScreen from './src/screen/ReloadScreen';
import BillScreen from './src/screen/BillScreen';
import lockScreen from './src/screen/LockScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Admin"
              component={AdminScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.replace('Login')}
                    style={{ marginRight: 10 }}
                  >
                    <Text style={{ color: 'blue', fontSize: 16 }}>Logout</Text>
                  </TouchableOpacity>
                ),
                headerLeft: () => null,
                gestureEnabled: false,
              })}
            />
            <Stack.Screen
              name="Data"
              component={DataScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.replace('Login')}
                    style={{ marginRight: 10 }}
                  >
                    <Text style={{ color: 'blue', fontSize: 16 }}>Logout</Text>
                  </TouchableOpacity>
                ),
                headerLeft: () => null,
                gestureEnabled: false,
              })}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen
              name="Tutorial 1"
              component={Tutorial1}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Tutorial 2"
              component={Tutorial2}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Setting"
              component={LogoutScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Cardinfo"
              component={CardinfoScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="My Card"
              component={MycardScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Get Card"
              component={GetcardScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Email"
              component={EmailScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Phone Number"
              component={PhonenumberScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Real Name Authenticatin"
              component={RNAScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Security"
              component={SecurityScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Customer Service"
              component={CustomerserviceScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Reload Card"
              component={ReloadScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Bill Details"
              component={BillScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Security Code"
              component={SecurityScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Lock Screen"
              component={lockScreen}
              // options={{
              //   headerShown: false,
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
