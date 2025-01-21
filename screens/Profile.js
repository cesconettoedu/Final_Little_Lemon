import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';

import Logo from '../assets/little-lemon/Logo.png';

const Profile = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [primeirNome, setPrimeirNome] = useState("")
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [pic, setPic] = useState(null);
  const [noPic, setNoPic] = useState(true)

  //just for cosmetics
  const [isCheckedA, setCheckedA] = useState(false);
  const [isCheckedB, setCheckedB] = useState(false);
  const [isCheckedC, setCheckedC] = useState(false);
  const [isCheckedD, setCheckedD] = useState(false);

  useEffect(() => { 
    //Example usage: Get user data from AsyncStorage  
    const getFirstName = AsyncStorage.getItem("@username");
    setNoPic(false);
    console.log(getFirstName);    
    setPrimeirNome(getFirstName); 
    const getUser = async () => {
      if(lastName && phone === null){
        setLastName('.')
        setPhone(0)
      }
      try {
        setFirstName(await AsyncStorage.getItem('@username'));
        setEmail(await AsyncStorage.getItem('@useremail'));
        setLastName(await AsyncStorage.getItem('@userlastname'));
        setPhone(await AsyncStorage.getItem('@userphone'));
        
      } catch (error) {
        console.error('Error geting User:', error);
      }
    };
    getUser();
       
  }, []);
  
  const handleSaveChanges = async () => {
    const firstPair = ["@username", `${firstName}`]
    const secondPair = ["@useremail", `${email}`]
    const thirdPair = ["@userlastname", `${lastName}`]
    const fourthPair = ["@userphone", `${phone}`]
    const fifthPari = ["@useravatar", `${pic}`]
    try {
      await AsyncStorage.multiSet([firstPair, secondPair, thirdPair, fourthPair]);
      Alert.alert('Info saved');
    } catch (e) {
      console.error('Error saving AsyncStorage:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage has been cleared');
      navigation.navigate('Onboarding');
    } catch (error) {
        console.error('Failed to clear AsyncStorage:', error);
    }

  }

  const changePic = async () => {
    setNoPic(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setPic(result.assets[0].uri);
    await AsyncStorage.setItem('@newPhoto', result.assets[0].uri);
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const removePic = () => {
    setNoPic(false)
    const first = firstName.charAt(0);
    const last = lastName.charAt(0);
    setPic(first + last)   
  }  


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>         
          {/* back button */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back-circle-sharp" size={42} color="#495E57" />          
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
              source={`${Logo}`}
              style={{width: 50 , height: 50}}
              contentFit="contain"
            />
            <Text style={styles.headerText}>Little Lemon</Text>
          </View>

          <View>
            {/* image perfil*/}
            {noPic ?
            <Image
              source={{uri: `${pic}`}}
              style={{width: 50 , height: 50, borderRadius: 50}}
              contentFit="contain"
            />
              : 
            <Text style={styles.initialNoImageA}>{firstName && Array.from(firstName)[0]}</Text>
              
            }
          </View>
      </View>

      <ScrollView style={styles.infoContainer}>
        <Text style={styles.subHeaderText}>Personal information</Text>

        <View style={{flexDirection: 'row', alignItems:'center', gap: 20}}>
          <View style={{flexDirection:'column'}}>
            <Text style={{color:'gray'}}>Avatar</Text>
            {noPic ?
              <Image
              source={{uri: `${pic}`}}
              style={{width: 65 , height: 65 , borderRadius: 50}}
              contentFit="contain"
              />
             : 
              <Text style={styles.initialNoImageA}>{firstName && Array.from(firstName)[0]}</Text>
            }
          </View>
          <TouchableOpacity 
            style={styles.btnChange}
            onPress={changePic}
          >
            <Text style={styles.btnText}>Change</Text>
          </TouchableOpacity> 
          <TouchableOpacity 
            style={styles.btnChange}
            onPress={removePic}
          >
            <Text style={styles.btnText}>Remove</Text>
          </TouchableOpacity> 
        </View> 

        <Text style={styles.labelText}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your first name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.labelText}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your last name"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.labelText}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.labelText}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />

        <Text style={styles.subHeaderText}>Email information</Text>


        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedA}
            onValueChange={setCheckedA}
            color={isCheckedA ? '#495E57' : undefined}
          />
          <Text >Order statuses</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedB}
            onValueChange={setCheckedB}
            color={isCheckedB ? '#495E57' : undefined}
          />
          <Text >Password changes</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedC}
            onValueChange={setCheckedC}
            color={isCheckedC ? '#495E57' : undefined}
          />
          <Text >Special offers</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedD}
            onValueChange={setCheckedD}
            color={isCheckedD ? '#495E57' : undefined}
          />
          <Text >Newsletter</Text>
        </View>

        <TouchableOpacity 
          style={styles.btnLogout}
          onPress={handleLogout}
        >
          <Text style={styles.btnTextLogOut}>Log out</Text>
        </TouchableOpacity> 

        <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center', gap: 20, marginBottom: 20}}>
          <TouchableOpacity 
            style={styles.btnChange}
          >
            <Text style={styles.btnText}>Discard changes</Text>
          </TouchableOpacity> 
          <TouchableOpacity 
            style={styles.btnChange}
            onPress={handleSaveChanges}
          >
            <Text style={styles.btnText}>Save changes</Text>
          </TouchableOpacity> 
        </View>


      </ScrollView>

    </View>
  );
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    paddingHorizontal: 20,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20
  },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#495E57',
  },
  subHeaderText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer:{
    
  },
  btnChange:{
    marginTop: 20,
    backgroundColor:'#495E57',
    borderRadius: 10
  },
  initialNoImageA:{
    backgroundColor:'#8bcacb', 
    fontSize: 25, 
    borderRadius: 50, 
    paddingVertical:8,
    paddingHorizontal: 11
  },
  initialNoImageB:{
    backgroundColor:'#8bcacb', 
    fontSize: 32, 
    borderRadius: 50, 
    paddingVertical:11,
    paddingHorizontal: 14
  },
  btnText:{
    color: '#EDEFEE',
    paddingHorizontal: 15,
    paddingVertical:10,
    letterSpacing: 2,
  },
  labelText: {
    marginTop: 15,
    color:"gray"
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },

  btnLogout: {
    marginTop: 20,
    backgroundColor:'#F4CE14',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  btnTextLogOut: {
    paddingHorizontal: 15,
    paddingVertical:10,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign:'center'
  }


 
});