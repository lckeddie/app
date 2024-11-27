import React, { useState, useEffect } from 'react';
import {
  Text,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  GestureResponderEvent,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function RegisterBtnPress(event: GestureResponderEvent): Promise<void> {
    if (phoneNumber.trim() && password.trim()) {
      try {
        const existingUsers = await AsyncStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : {};
  
        if (phoneNumber === '888' || phoneNumber === '666') {
          Alert.alert('Register Failed', 'This phone number cannot be registered.');
        } else if (users[phoneNumber]) {
          Alert.alert('Register Failed', 'Phone number already registered.');
        } else {
          users[phoneNumber] = password;
          await AsyncStorage.setItem('users', JSON.stringify(users));
          Alert.alert('Register Success', 'You can login to ABC Master Card App now.');
          setPhoneNumber('');
          setPassword('');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Register Failed', 'Please try again.');
      }
    } else {
      Alert.alert('Register Failed', 'Please enter your phone number and password.');
    }
  }
  

  async function LoginBtnPress(event: GestureResponderEvent): Promise<void> {
    if (phoneNumber.trim() && password.trim()) {
      try {
        const existingUsers = await AsyncStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : {};

        if (phoneNumber === '888' && password === 'admin') {
          setPhoneNumber('');
          setPassword('');
          navigation.replace('Admin');
        } else if (phoneNumber === '666' && password === 'data') {
          navigation.replace('Data');
        } else if (users[phoneNumber] === password) {
          navigation.replace('Home', { phoneNumber });
        } else {
          Alert.alert('Login Failed', 'Invalid phone number or password.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Login Failed', 'Please try again.');
      }
    } else {
      Alert.alert('Login Failed', 'Please enter your phone number and password.');
    }
  }

  return (
    <ImageBackground
      source={require('./src/assets/wallpaper.jpg')}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>Welcome to ABC Master Card!!!</Text>

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter Your Phone Number Here"
        placeholderTextColor="lightgray"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter Your Password Here"
        placeholderTextColor="lightgray"
      />

      <View style={styles.buttonContainer}>
        <Button onPress={LoginBtnPress} title="Login" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={RegisterBtnPress} title="Register" />
      </View>
    </ImageBackground>
  );
};

const HomeScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { phoneNumber } = route.params; 

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Welcome '{phoneNumber}' user to the Home Page!</Text>
    </View>
  );
};

const DataScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const [data, setData] = useState<any[]>([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch data.');
      }
    }

    fetchData();
  }, []);


  return (
    <View style={styles.homeContainer}>
      <Text style={styles.sectionTitle}>Data:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataItem}>
            <Text style={styles.dataTitle}>{item.title}</Text>
            <Text style={styles.dataBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const AdminScreen = ({ navigation }: { navigation: any }) => {
  const [users, setUsers] = useState<{ [key: string]: string }>({});

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Login');
                }}
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
          name="Admin"
          component={AdminScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Login');
                }}
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
                onPress={() => {
                  navigation.replace('Login');
                }}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: 'blue', fontSize: 16 }}>Logout</Text>
              </TouchableOpacity>
            ),
            headerLeft: () => null,
            gestureEnabled: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    marginTop: 50,
    fontSize: 40,
    color: 'white',
  },
  subtitle: {
    fontSize: 40,
    color: 'white',
  },
  label: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
  },
  input: {
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  homeContainer: {
    flex: 1,
    padding: 20,
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 20,
    marginTop: 10,
  },
  dataItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataBody: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  adminContainer: {
    flex: 1,
    padding: 20,
  },
  adminTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userText: {
    fontSize: 14,
    marginBottom: 10,
  },
});
