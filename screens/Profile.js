import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';


const Profile = () => {

   const [isCheckedA, setCheckedA] = useState(false);
   const [isCheckedB, setCheckedB] = useState(false);
   const [isCheckedC, setCheckedC] = useState(false);
   const [isCheckedD, setCheckedD] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>         
          {/* back button */}
          <TouchableOpacity>
            <Ionicons name="arrow-back-circle-sharp" size={42} color="#495E57" />          
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
              source={require('../assets/little-lemon/Logo.png')}
              style={{width: 50 , height: 50}}
              contentFit="contain"
            />
            <Text style={styles.headerText}>Little Lemon</Text>
          </View>

          <View>
            {/* image perfil*/}
            <Image
              source={require('../assets/little-lemon/user.png')}
              style={{width: 50 , height: 50, borderRadius: 50}}
              contentFit="contain"
            />
          </View>
      </View>

      <ScrollView style={styles.infoContainer}>
        <Text style={styles.subHeaderText}>Personal information</Text>

        <View style={{flexDirection: 'row', alignItems:'center', gap: 20}}>
          <View style={{flexDirection:'column'}}>
            <Text style={{color:'gray'}}>Avatar</Text>
            <Image
              source={require('../assets/little-lemon/user.png')}
              style={{width: 65 , height: 65 , borderRadius: 50}}
              contentFit="contain"
            />
          </View>
          <TouchableOpacity style={styles.btnChange}>
            <Text style={styles.btnText}>Change</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnChange}>
            <Text style={styles.btnText}>Remove</Text>
          </TouchableOpacity> 
        </View> 

        <Text style={styles.labelText}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your first name"
          //value={name}
          //onChangeText={setName}
        />

        <Text style={styles.labelText}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your last name"
          //value={name}
          //onChangeText={setName}
        />

        <Text style={styles.labelText}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your email"
          //value={name}
          //onChangeText={setName}
          keyboardType="email-address"
        />

        <Text style={styles.labelText}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your phone number"
          //value={name}
          //onChangeText={setName}
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
          <Text >Order statuses</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedC}
            onValueChange={setCheckedC}
            color={isCheckedC ? '#495E57' : undefined}
          />
          <Text >Order statuses</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedD}
            onValueChange={setCheckedD}
            color={isCheckedD ? '#495E57' : undefined}
          />
          <Text >Order statuses</Text>
        </View>

        <TouchableOpacity style={styles.btnLogout}>
          <Text style={styles.btnTextLogOut}>Log out</Text>
        </TouchableOpacity> 

        <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center', gap: 20, marginBottom: 20}}>
          <TouchableOpacity style={styles.btnChange}>
            <Text style={styles.btnText}>Discard changes</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnChange}>
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