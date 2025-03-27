import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';


//import das paginas
import KmToMp from './screens/KmToMp';
import CelsiusToFahrenheit from './screens/CelsiusToFahrenheit';
import Home from './screens/Home';
import AgeCalculator from './screens/AgeCalculator';
import Invite from './screens/Invite';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Calculadoras' }}
      />

      <Stack.Screen 
        name="CelsiusToFahrenheit" 
        component={CelsiusToFahrenheit} 
        options={{ title: 'Celsius ↔ Fahrenheit' }}
      />
   
  <Stack.Screen 
        name="KmToMp" 
        component={KmToMp} 
        options={{ title: 'Km/h ↔ mph' }}
      />

<Stack.Screen 
        name="AgeCalculator" 
        component={AgeCalculator} 
        options={{ title: 'Idade' }}
      />

<Stack.Screen 
        name="Invite" 
        component={ Invite} 
        options={{ title: 'Invite' }}
      />



    </Stack.Navigator>
  </NavigationContainer>
  );
}


