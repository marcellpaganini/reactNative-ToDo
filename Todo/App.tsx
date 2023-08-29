import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';


interface Todo {
  text: string;
  key: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {text: 'Study', key: '1'},
    {text: 'Work on project', key: '2'},
    {text: 'Wash the dog', key: '3'},
  ])

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key !== key);
    })
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/*To Form*/}
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});


