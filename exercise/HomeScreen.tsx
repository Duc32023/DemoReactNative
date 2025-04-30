import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/type';
import { Button } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../type/type';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>
// type HomeScreenProps = {
//   navigation: DrawerNavigationProp<DrawerParamList, 'HomeScreen'>;
// };

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Go to Detail
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03DAC6', // Màu nền của nút (màu xanh lam)
    borderRadius: 8, // Bo góc để nút có hình chữ nhật thay vì bầu dục
    paddingHorizontal: 16, // Khoảng cách bên trong theo chiều ngang
    paddingVertical: 8, // Khoảng cách bên trong theo chiều dọc
  },
  buttonLabel: {
    color: '#000', // Màu chữ của nút
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm của chữ
  },
});

export default HomeScreen;