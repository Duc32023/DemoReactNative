import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';

const CustomDrawerBar: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text style={styles.header}>Menu</Text>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('HomeScreen')}
        />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  }
});

export default CustomDrawerBar;