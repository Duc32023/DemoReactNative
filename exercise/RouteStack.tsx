import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from '../screens/MainMenuScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import Login from './Login';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import { RootStackParamList } from '../type/type'; // import type
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RouteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/> */}
    </Stack.Navigator>
  );
};

export default RouteStack;
