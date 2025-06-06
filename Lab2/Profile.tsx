import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRandomContact } from '../utility/api';
import ContactThumbnail from './ContactThumbnail'
import DetailListItem from './DetailListItem';
import colors from '../utility/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src';
import { ContactParamList } from '../type/type';
interface Contact{
    avatar: string;
    name: string;
    email: string;
    phone: string;
    cell: string;
}
type ProfileProps = NativeStackScreenProps<ContactParamList, 'Profile'>;
const Profile:React.FC<ProfileProps> = ({route}) => {
  const { contact } = route.params;
  const { avatar, name, email, phone, cell } = contact as Contact;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});