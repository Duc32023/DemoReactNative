
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactListItem from './ContactListItem';

const keyExtractor = ({phone}:{phone:string}) => phone;
// Main Component
const Contacts = () => {
  // State
  const [contacts, setContacts] = useState<{name:string, avatar:string, phone: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Load Data
  useEffect(() => {
    setLoading(true);
    fetchContacts()
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        console.log('Error');
        setLoading(false);
        setError(true);
      });
  }, []);

  // Sort
  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
  interface Item{
    name: string;
    avatar: string;
    phone: string;
    onPress?: () => void;
  }
  const renderContact = ({ item }:{item:Item}) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => {}}
      />
    );
  };

  // Render
  return (
    <View style={styles.container}>
      {(loading && <ActivityIndicator color="blue" size="large" />)}
      {(error && <Text>Error...</Text>)}
      {(!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Contacts;
