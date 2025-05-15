import 'react-native-gesture-handler'; 
import 'react-native-reanimated'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from './exercise/Store';
import HomeScreen from './exercise/HomeScreen';
import DetailsScreen from './exercise/DetailsScreen';
import CustomNavigationBar from './exercise/CustomNavigationBar';
import Login from './exercise/Login';
import Register from './exercise/Register';
import ForgetPassword from './exercise/ForgetPassword';
import TodoScreen from './exercise/TodoScreen';
import BottomTabNavigator from './exercise/BottomTabNavigator';

type RootStackParamList = {
  Login: undefined;
  HomeScreen: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  Details: undefined;
  TodoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); 
export default function App() {
  return (
    <Store>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />,
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={BottomTabNavigator}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="TodoScreen"
              component={TodoScreen}
              options={{ headerShown: true, title: 'Todo List' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Store>
  );
}