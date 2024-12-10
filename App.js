import React from 'react';
import { SafeAreaView } from 'react-native';
import Onboarding from './screens/Onboarding'; // Certifique-se de que o caminho está correto

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboarding />
    </SafeAreaView>
  );
};

export default App;
