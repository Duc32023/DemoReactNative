import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { store } from './store';
import TodoScreen from './exercise/TodoScreen'; // Đường dẫn đến TodoScreen

// Giả sử TabNavigator và DrawerNavigator từ Lab2
import TabNavigator from './Lab2/Route';
import DrawerNavigator from './Lab2/Route2';

// Type cho Tab Navigator
type TabParamList = {
  OriginalTabs: undefined;
  TodoApp: undefined;
};

// Type cho Drawer Navigator
type DrawerParamList = {
  OriginalDrawer: undefined;
  TodoApp: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const App: React.FC = () => {
  const [useDrawer, setUseDrawer] = useState(false);

  // Custom Tab Navigator bao gồm TodoScreen
  const CustomTabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="OriginalTabs" component={TabNavigator} />
      <Tab.Screen name="TodoApp" component={TodoScreen} options={{ title: 'Todo App' }} />
    </Tab.Navigator>
  );

  // Custom Drawer Navigator bao gồm TodoScreen
  const CustomDrawerNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="OriginalDrawer" component={DrawerNavigator} />
      <Drawer.Screen name="TodoApp" component={TodoScreen} options={{ title: 'Todo App' }} />
    </Drawer.Navigator>
  );

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <Button
              title={useDrawer ? 'Switch to Tab Navigation' : 'Switch to Drawer Navigation'}
              onPress={() => setUseDrawer(!useDrawer)}
            />
            {useDrawer ? <CustomDrawerNavigator /> : <CustomTabNavigator />}
          </View>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;