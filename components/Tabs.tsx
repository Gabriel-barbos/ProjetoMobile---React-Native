import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'; 
import Home2 from '../screens/Home2'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Projetos 1',
        }}
      />
      <Tab.Screen
        name="HomeDark"
        component={Home2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="work-outline" color={color} size={size} />
          ),
          tabBarLabel: 'Projetos 2',
        }}
      />
    </Tab.Navigator>
  );
}
