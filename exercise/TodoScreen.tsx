import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleProp, ViewStyle } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
interface TodoItem {
  id: string;
  title: string;
  complete: boolean;
}


interface TodoProps {
  id: string;
  title: string;
  complete: boolean;
}


declare const Todo: React.FC<TodoProps>;

const TodoScreen: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<TodoItem[]>([]);   

  const todosRef = firestore().collection('todos');

  useEffect(() => {
    const unsubscribe = todosRef.onSnapshot((querySnapshot) => {
      const list: TodoItem[] = [];
      querySnapshot.forEach((doc) => {
        const { title, complete } = doc.data();
        list.push({ id: doc.id, title, complete });
      });
      setTodos(list);
      if (loading) setLoading(false);
    });

    return () => unsubscribe();
  }, [loading]); 

  const addTodo = async () => {
    if (todo.trim().length === 0) return;
    await todosRef.add({ title: todo, complete: false });
    setTodo('');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar>
        <Appbar.Content title="TODOs List" />
      </Appbar>
      {todos.length === 0 ? (
        <Text style={{ textAlign: 'center', padding: 10 }}>No todos yet!</Text>
      ) : (
        <FlatList<TodoItem>
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Todo {...item} />}
        />
      )}
      <TextInput
        label="New Todo"
        value={todo}
        onChangeText={setTodo}
        style={{ margin: 10 } as StyleProp<ViewStyle>}
      />
      <Button mode="contained" onPress={addTodo} style={{ margin: 10 } as StyleProp<ViewStyle>}>
        Add TODO
      </Button>
    </View>
  );
};

export default TodoScreen;