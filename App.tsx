import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';

// import das páginas
import KmToMp from './screens/KmToMp';
import CelsiusToFahrenheit from './screens/CelsiusToFahrenheit';
import AgeCalculator from './screens/AgeCalculator';
import Invite from './screens/Invite';
import Lottery from './screens/Lottery';
import TextScreen from './screens/TextScreen';

import Tabs from './components/Tabs'; 

import FoodMenu from './screens/FoodMenu'
import Foods from './screens/Foods'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
          options={{ headerShown: false }}
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
          component={Invite} 
          options={{ title: 'Invite' }}
        />
        <Stack.Screen 
          name="Lottery" 
          component={Lottery} 
          options={{ title: 'Lottery' }}
        />
        <Stack.Screen 
          name="TextScreen" 
          component={TextScreen} 
          options={{ title: 'Text' }}
        />
         <Stack.Screen 
          name="FoodMenu" 
          component={FoodMenu} 
          options={{ title: 'FoodMenu' }}
        />
          <Stack.Screen 
          name="Foods" 
          component={Foods} 
          options={{ title: 'Foods' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
