import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';

const AboutScreen = () => {
  // Sample data for FlatList
  const details = [
    { id: '1', text: 'KD \n cvyuhfcfd56rtdtgcghch66767cgh', amount: '4563.93 KDs' },
  ];

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity 
        style={styles.connect} 
        onPress={() => Alert.alert('Connect History', 'Viewing connection history!')}>
        <Text style={styles.connectText}>Connect History</Text>
      </TouchableOpacity>

      <View style={styles.blcContainer}>
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
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.dtlItem} 
              onPress={() => Alert.alert('Item Clicked', `You clicked ${item.text}`)}>
              <Text style={styles.dtlText}>{item.text}</Text>
              <Text style={styles.dtlText}>{item.amount}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
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
    top: 20,
    right: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20, 
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
    width: '100%',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 20, 
  },
  dtlItem: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dtlText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default AboutScreen;
