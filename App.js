import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from "./screens/Onboarding";
import ProfileScreen from './screens/Profile';
import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';

import { initDatabase } from './database';

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState({
    isLoading: true,  // Initially loading
    isOnboardingCompleted: false,  // Flag to check if onboarding is completed
  });

  useEffect(() => {
  const initialize = async () => {
    try {
      // Inicializa o banco de dados
      await initDatabase();
      
      // Verifica status do onboarding
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
      console.log(onboardingStatus);
      
      if (onboardingStatus === 'true') {
        setState({ isLoading: false, isOnboardingCompleted: true });
      } else {
        setState({ isLoading: false, isOnboardingCompleted: false });
      }
    } catch (error) {
      console.error('Error during initialization:', error);
      setState({ isLoading: false, isOnboardingCompleted: false });
    }
  };

  initialize();
}, []);

  // this will be a splash screen
  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {state.isOnboardingCompleted ? (
    //   // Onboarding completed, user is signed in
    //       <>
    //         <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
    //         <Stack.Screen name='Profile' component={ProfileScreen} />
    //       </>
    //     ) : (
    //   // User is NOT signed in
    //       <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName={state.isOnboardingCompleted ? "Home" : "Onboarding"}>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
