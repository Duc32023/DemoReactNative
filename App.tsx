import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider } from 'react-native-paper';
import Store from './exercise/Store'; // Sử dụng React Context từ Store.tsx

import MainMenuScreen from './screens/MainMenuScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './exercise/DetailsScreen';
import HomeScreen from './exercise/HomeScreen';
import Profile from './exercise/Profile';
import CustomDrawerBar from './exercise/CustomDrawerBar';
import TodoScreen from './exercise/TodoScreen';

type RootStackParamList = {
  MainMenu: undefined;
  TodoApp: undefined;
  Theory: undefined;
  Practice: undefined;
  List: undefined;
  Detail: undefined;
  Ex4_DetailScreen: undefined;
};

type TheoryDrawerParamList = {
  TheoryHome: undefined;
  TheoryProfile: undefined;
  TheoryDetail: undefined;
};

type PracticeDrawerParamList = {
  Project1: undefined;
  Project2: undefined;
  Project3: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const PracticeDrawerNavigator = createDrawerNavigator<PracticeDrawerParamList>();
const TheoryDrawerNavigator = createDrawerNavigator<TheoryDrawerParamList>();

const TheoryDrawer = () => (
  <TheoryDrawerNavigator.Navigator drawerContent={(props) => <CustomDrawerBar {...props} />}>
    <TheoryDrawerNavigator.Screen name="TheoryHome" component={HomeScreen as React.ComponentType<any>} />
    <TheoryDrawerNavigator.Screen name="TheoryProfile" component={Profile} />
    <TheoryDrawerNavigator.Screen name="TheoryDetail" component={DetailsScreen} />
  </TheoryDrawerNavigator.Navigator>
);

const PracticeDrawer = () => (
  <PracticeDrawerNavigator.Navigator
    drawerContent={(props) => <CustomDrawerBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <PracticeDrawerNavigator.Screen name="Project1" component={HomeScreen as React.ComponentType<any>} />
    <PracticeDrawerNavigator.Screen name="Project2" component={HomeScreen as React.ComponentType<any>} />
    <PracticeDrawerNavigator.Screen name="Project3" component={HomeScreen as React.ComponentType<any>} />
  </PracticeDrawerNavigator.Navigator>
);

const App: React.FC = () => {
  return (
    <Store> {/* Sử dụng React Context để bao bọc ứng dụng */}
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainMenu">
            <Stack.Screen
              name="MainMenu"
              component={MainMenuScreen}
              options={{ title: 'Chọn chế độ' }}
            />
            <Stack.Screen name="TodoApp" component={TodoScreen} />
            <Stack.Screen name="Theory" component={TheoryDrawer} />
            <Stack.Screen name="Practice" component={PracticeDrawer} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailsScreen} />
            <Stack.Screen name="Ex4_DetailScreen" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Store>
  );
};

export default App;