import HomeScreen from './HomeScreen';
import Profile from './Profile';
import CustomDrawerBar from "./CustomDrawerBar";
import { DrawerParamList } from '../type/type';
import { createDrawerNavigator, DrawerContentComponentProps  } from "@react-navigation/drawer";
import React from 'react';
const Drawer = createDrawerNavigator<DrawerParamList>();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerBar {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
