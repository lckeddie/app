import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image , SafeAreaView } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import PersonIcon from '../assets/person.png';
import settingIcon from '../assets/setting.png';
import { useNavigation } from '@react-navigation/native';
import All from '../assets/all.png';
import Wait from '../assets/wait.png';
import Success from '../assets/success.png';
import Fail from '../assets/fail.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = () => {
  const navigation = useNavigation();

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

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

  const gotomycard = async () => {
    try {
      navigation.navigate('My Card');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotogetcard = async () => {
    try {
      navigation.navigate('Get Card');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotoemail = async () => {
    try {
      navigation.navigate('Email');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotophonenumber = async () => {
    try {
      navigation.navigate('Phone Number');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotoRNA = async () => {
    try {
      navigation.navigate('Real Name Authenticatin');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotosecurity = async () => {
    try {
      navigation.navigate('Security');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  const gotocustomerservice = async () => {
    try {
      navigation.navigate('Customer Service');
    } catch (error) {
      console.error(error);
      alert('Failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
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
        <TouchableOpacity onPress={() => copyToClipboard('24070417005')}>
          <MaterialIcons name="content-copy" size={20} color="#333" style={styles.copyIcon} />
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => alert('All clicked!')}>
          <Image source={All} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Wait clicked!')}>
          <Image source={Wait} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Wait</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Success clicked!')}>
          <Image source={Success} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Fail clicked!')}>
          <Image source={Fail} style={styles.tabButtonIcon} />
          <Text style={styles.tabButtonText}>Fail</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotomycard}>
          <Text style={styles.menuButtonText}>My Card</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotogetcard}>
          <Text style={styles.menuButtonText}>Get Card</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotoemail}>
          <Text style={styles.menuButtonText}>Email</Text>
          <Text style={{ marginLeft: '50%', color: '#848482' }}>x*@gmail.com</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotophonenumber}>
          <Text style={styles.menuButtonText}>Phone Number</Text>
          <Text style={{ marginLeft: '35%', color: '#848482' }}>131****5611</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotoRNA}>
          <Text style={styles.menuButtonText}>Real Name Authentication</Text>
          <Text style={{ marginLeft: 'auto', color: 'red', fontSize: 12 }}>Already real-name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotosecurity}>
          <Text style={styles.menuButtonText}>Security</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={gotocustomerservice}>
          <Text style={styles.menuButtonText}>Customer Service</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} marginLeft={'auto'} color={'#C0C0C0'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.versionText}>Current Version: 999.0.0(11)</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  settingIcon: {
    position: 'absolute',
    top: 0,
    right: '5%',
    width: 20,
    height: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    left: '7%',
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
    marginLeft: '10%',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },
  copyIcon: {
    marginTop: -50,
    marginLeft: 10,
  },
  adContainer: {
    margin: 'auto',
    marginTop: '0%',
    marginBottom: '-15%',
    backgroundColor: 'lightskyblue',
    width: 370,
    height: 100,
    borderRadius: 7,
    padding: 15,
    flexDirection: 'row',
  },
  adText: {
    marginTop: 0,
    marginLeft: '17%',
    margin: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  getcardText: {
    marginTop: 2,
    marginLeft: '23%',
    fontSize: 14,
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
    width: 370,
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
    width: 370,
    height: 390,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },
  menuButton: {
    marginTop: 'auto',
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
    marginBottom: '3%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
  },
});

export default SettingScreen;
