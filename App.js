import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import RouteStack from './exercise/RouteStack';
import Store from './exercise/Store';
import Login from './exercise/Login';
import ForgetPassword from './exercise/ForgetPassword';
import Register from './exercise/Register';

export default function App() {
  return (
    <Store>
    <PaperProvider>
    <NavigationContainer>

      <RouteStack/>
    </NavigationContainer>
  </PaperProvider>
  </Store>
  );
}