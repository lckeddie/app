import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image ,  } from 'react-native';
import PersonIcon from '../assets/person.jpeg';
import settingIcon from '../assets/setting.png';
import { useNavigation } from '@react-navigation/native';
import ReloadIcon from '../assets/reload.png';
import BillIcon from '../assets/bill.png';
import SecurityIcon from '../assets/security.jpg';
import LockIcon from '../assets/lock.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SettingScreen = () => {
  const navigation = useNavigation();

  const gotoLogout = async () => {
    try {
      navigation.navigate('Setting');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotomakecard = async () => {
    try {
      navigation.navigate('Cardinfo');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={gotoLogout}>
        <Image source={settingIcon} style={styles.settingIcon} />
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <Image source={PersonIcon} style={styles.personIcon} />
        <Text style={styles.nameText}>zhang shan</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.memberText}>MEMBER</Text>
        <Text style={styles.UIDText}>UID: 24070417005</Text>
      </View>
      <View style={styles.adContainer}>
        <Text style={styles.adText}>
          lower fee visual card
        </Text>
        <TouchableOpacity onPress={gotomakecard}>
          <Text style={styles.getcardText}>get now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabButtonContainer}>
        <TouchableOpacity onPress={() => alert('Reload Card clicked!')}>
          <Image source={ReloadIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Bill Details clicked!')}>
          <Image source={BillIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Wait</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Security Code clicked!')}>
          <Image source={SecurityIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Lock Screen clicked!')}>
          <Image source={LockIcon} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Fail</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>My Card</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Get Card</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Email</Text>
          <Text style={{marginLeft:'50%', color:'#848482'}}>x*@gmail.com</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Phone Number</Text>
          <Text style={{marginLeft:'35%', color:'#848482'}}>131****5611</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Real Name Authentication</Text>
          <Text style={{ marginLeft: 'auto', color: 'red', fontSize: 12}}>Already real-name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Security</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => alert('')}>
          <Text style={styles.menuButtonText}>Customer Service</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.versionText}>Current Version: 999.0.0(11)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20
  },
  settingIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },  
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  personIcon: {
    width: 70,
    height: 70,
    marginRight: 10,
    marginTop: 10,
  },
  nameText: {
    marginTop: -10,
    marginRight: 150,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  memberText: {
    marginTop: -80,
    marginLeft: 80,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  UIDText: {
    marginTop: -80,
    marginLeft: 50,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
  },
  adContainer: {
    margin: 'auto',
    marginBottom: '-15%',
    backgroundColor: 'lightskyblue',
    width: 360,
    height: 100,
    borderRadius: 7,
    padding: 15,
    flexDirection: 'row',
  },
  adText: {
    marginTop: 0,
    marginLeft: 50,
    margin: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  getcardText: {
    marginTop: 2,
    marginLeft: -60,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
  },
  tabButtonContainer: {
    marginTop: 10,
    margin: 'auto',
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
  tabButtonIcon: {
    margin: 'auto',
    width: 40,
    height: 40,
  },
  tabButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  menuContainer: {
    margin: 'auto',
    marginTop: 0,
    width: 360,
    height: 405,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },
  menuButton: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 1,
    backgroundColor: '#F2F3F4',
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#000000',
    fontSize: 14,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
  },
});

export default SettingScreen;
