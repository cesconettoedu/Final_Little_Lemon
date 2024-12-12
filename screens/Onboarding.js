import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const Onboarding = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleCompleteOnboarding = () => {
    const nameValid = /^[A-Za-z\s]+$/.test(name);
    const emailValid = /\S+@\S+\.\S+/.test(email);

    if (!name || !email) {
      Alert.alert('Error', 'Please fill in all fields!');
    } else if (!nameValid) {
      Alert.alert('Error', 'Please enter a valid name.');
    } else if (!emailValid) {
      Alert.alert('Error', 'Please enter a valid email.');
    } else {
      Alert.alert('Success', 'Onboarding completed successfully!');
      // Here do something after click on Next button
      completeOnboarding()
    }
  };

  const completeOnboarding = async () => {
    try {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    navigation.navigate('Profile'); // Navigate to Profile screen
    } catch (e) {
    console.error('Error saving AsyncStorage:', error);
    }
  };  

  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/little-lemon/Logo.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.subHeaderText}>Let us get to know you</Text>

        <View>
          <Text style={styles.labelText}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your first name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.labelText}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: name && email && /\S+@\S+\.\S+/.test(email) ? '#F4CE14' : 'lightgray' }]}
          disabled={!name || !email || !/\S+@\S+\.\S+/.test(email)}
          onPress={handleCompleteOnboarding}
        >
          <Text style={[styles.labelText, { color: name && email && /\S+@\S+\.\S+/.test(email) ? '#333333' : 'gray' }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    height: '15%', 
    width: "100%",
    backgroundColor:'#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  middleContainer: {
    height: '70%', 
    width: "100%",
    backgroundColor:'#B5B5B5',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subHeaderText:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: 320,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
  },
  btnContainer: {
    height: "15%",
    width: '100%',
    justifyContent: 'center',
    alignItems:'flex-end',
    borderRadius: 5,
    backgroundColor:''
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightgray',
    marginRight: '10%'
  },
});

export default Onboarding;
