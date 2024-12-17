import React from 'react'
import { View, Text, StyleSheet,FlatList, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Logo from '../assets/little-lemon/Logo.png';
import Photo from '../assets/little-lemon/user.png';
import ShowImage from '../assets/little-lemon/Hero_image.png';

const Home = () => {

  const menuTitles = [
    {
      id: 1,
      title: 'Starters',
    },
    {
      id: 2,
      title: 'Mains',
    },
     {
      id: 3,
      title: 'Desserts',
    },
     {
      id: 4,
      title: 'Drinks',
    },
  ]

return (

<View style={styles.container}>
      <View style={styles.headerContainer}>                  
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
            <Image
              source={`${Photo}`}
              style={{width: 50, height: 50, borderRadius: 50, left: 80}}
              contentFit="contain"
            />

          </View>
      </View>

      <View style={styles.apresentation}>
        <Text style={{color: '#F4CE14', fontSize:40, fontWeight:'medium'}}>Litte Lemon</Text>
        <Text style={{color: '#EDEFEE', fontSize:20,}}>Chicago</Text>
        <View style={{flexDirection:'row', gap:20, marginTop: 10 }}>
          <View style={{width: '55%'}}>
            <Text style={{color: '#EDEFEE', fontSize:16}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
          </View>
          <Image
            source={`${ShowImage}`}
            style={{width: 130, height: 130, borderRadius: 10, bottom: 20}}
            contentFit="contain"
          />
        </View>
        <TouchableOpacity style={styles.search}>
          <FontAwesome5 name="search" size={24} color="#333333" />
        </TouchableOpacity>
      </View>
      
      <View style={{marginTop:20 }}>
        <Text style={{fontSize: 20 , fontWeight: 'bold', marginBottom: 20}}> ORDER FOR DELIVERY!</Text>

        <FlatList
          data={menuTitles}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuTitles}>
              <Text style={{fontSize: 16 , fontWeight: 'bold', color: '#495E57'}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}  
        />
      </View>

      
  </View>    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    paddingHorizontal: 20,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent:'center',
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

  apresentation: {
    backgroundColor: '#495E57',
    padding: 20
  },

  search: {
    backgroundColor: '#EDEFEE',  
    width: 50,                   
    height: 50,                  
    borderRadius: 25,            
    justifyContent: 'center',    
    alignItems: 'center',        
    padding: 10,     
  },

  menuTitles:{
    backgroundColor: '#c2d1cc',                
    height: 50,                  
    borderRadius: 20,            
    justifyContent: 'center',    
    alignItems: 'center',        
    padding: 10,
    marginRight: 20,
     
  }
  
});