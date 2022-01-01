import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { getAllKeys, getTodos } from './async_storage/storage';

// styles
import { styles } from './styles/app-style';

import Header from './components/header';
import AddTodo from './components/addTodo';
import Todos from './components/todos';

export default function App() {
  const [list, setList] = useState([]);
  const [todoKeys, setTodoKeys] = useState([]);

  useEffect(() => {
    getAllKeys(setTodoKeys);
  }, []);

  useEffect(() => {
    todoKeys.map(key => getTodos(key, setList));

    // remove duplicate item
    todoKeys.filter((item, pos) => {
      return todoKeys.indexOf(item) == pos;
    });
  }, [todoKeys]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo add={[list, setList]} />

          <View style={styles.list}>
            <FlatList 
              data={list}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  <Todos item={item} data={[list, setList]} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}