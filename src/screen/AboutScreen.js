import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, Image , SafeAreaView} from 'react-native';
import CoinIcon from '../assets/coin.png';

const generateRandomDetails = (count) => {
  const generateRandomName = () => {
    const randomname = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array.from({ length: 5 }, () => randomname[Math.floor(Math.random() * randomname.length)]).join('');
  };

  const generateRandomEmail = () => {
    const randomemail = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const emailName = Array.from({ length: 5 }, () => randomemail[Math.floor(Math.random() * randomemail.length)]).join('');
    return `${emailName}@gmail.com`;
  };

  return Array.from({ length: count }, (_, id) => ({
    id: `${id + 1}`,
    name: generateRandomName(),
    email: generateRandomEmail(),
  }));
};

const AboutScreen = () => {
  const details = generateRandomDetails(500);

  const isEmailContainsNumber = (email) => /\d/.test(email);

  const renderTextWithColoredNumbers = (text, isRed) => {
    return (
      <Text style={[styles.dtlText, isRed && styles.numberText]}>
        {text}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.connect}
        onPress={() => Alert.alert('Connect History', 'connecting history!')}>
        <Text style={styles.connectText}>Connect History</Text>
      </TouchableOpacity>

      <View style={styles.blcContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Binding', 'Binding Success')}>
          <Text style={styles.biding}>Binding</Text>
        </TouchableOpacity>
        <Text style={styles.blcText}>My Balance</Text>
        <Text style={styles.balanceAmount}>3152.43</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Reload', 'Reloading balance')}>
            <Text style={styles.buttonText}>Reload</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Bill', 'Viewing bill')}>
            <Text style={styles.buttonText}>Bill</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dtlContainer}>
        <FlatList
          data={details}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isRed = isEmailContainsNumber(item.email);
            return (
              <TouchableOpacity
                style={styles.dtlItem}
                onPress={() => Alert.alert('User Details', `You clicked ${item.name}`)}>
                <Image source={CoinIcon} style={styles.dtlIcon} />
                {renderTextWithColoredNumbers(item.name, isRed)}
                {renderTextWithColoredNumbers(item.email, isRed)}
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.noMoreText}>No More~</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#15A3EF', 
    justifyContent: 'center',
  },
  connect: {
    position: 'absolute',
    top: '6%',
    right: '3%',
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  connectText: {
    color: '#fff',
    fontSize: 12,  
    fontWeight: 'bold',
  },
  blcContainer: {
    width: '100%', 
    height: 220,  
    marginTop: 60,
    backgroundColor: '#CDEBFC',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  blcText: {
    marginRight: 150,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceAmount: {
    marginRight: 150,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20, 
  },
  biding: {
    marginTop: -40,
    marginLeft: 250,
    fontSize: 16,
    color: '#007bff',
  },
  buttonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1, 
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dtlContainer: {
    flex: 1,
    width: '120%',
    marginBottom: -40,
    marginTop: -40,
    marginLeft: -37,
    backgroundColor: 'white',
    padding: 20,
  },
  dtlItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 5,
    width: '85%',
    margin: 'auto',
  },
  dtlIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  dtlText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'right',
  },
  numberText: {
    color: 'red',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  noMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default AboutScreen;
