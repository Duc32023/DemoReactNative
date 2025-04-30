import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './Contacts'
import Profile from './Profile';
import colors from '../utility/colors';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Contacts"
      >
        <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Contacts' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;