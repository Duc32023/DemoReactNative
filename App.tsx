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
import { RootStackParamList } from './type/type'; 
import { DrawerParamList } from './type/type';
import Login from './exercise/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerBar from './exercise/CustomDrawerBar';
import Profile from './Lab2/Profile';
import MyDrawer from './exercise/MyDrawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './exercise/BottomTabNavigator';
import Register from './exercise/Register';
import ForgetPassword from './exercise/ForgetPassword';
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
            <Stack.Screen name="Login" component={Login}   options={{ headerShown: true }} />
            <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: true }}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Store>
  );
}