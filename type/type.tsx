import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  MainMenu: undefined;
  List: { type: string; title: string };
  Detail: { componentName: string };
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  HomeScreen: undefined;
  Details: undefined;
  Profile: undefined;
  MyDrawer: undefined;
};

export type DrawerParamList = {
  HomeScreen: undefined;
  Profile: undefined;
  Details: undefined;
};

export type TabParamList = {
  HomeScreen: undefined; 
  Profile: undefined;  
};