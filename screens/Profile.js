import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


const Profile = () => {
  
  
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

      <View style={styles.infoContainer}>
        <Text style={styles.subHeaderText}>Personal information</Text>

        <View style={{flexDirection: 'row', alignItems:'center', gap: 20}}>
          <View style={{flexDirection:'column'}}>
            <Text style={styles.labelText}>Avatar</Text>
            <Image
              source={require('../assets/little-lemon/user.png')}
              style={{width: 65 , height: 65 , borderRadius: 50}}
              contentFit="contain"
            />
          </View>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text>Remove</Text>
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


      </View>



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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer:{
    
  },
  labelText: {
    marginTop: 15,
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


 
});