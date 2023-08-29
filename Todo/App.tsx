import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Study', key: '1'},
    {text: 'Work on project', key: '2'},
    {text: 'Wash the dog', key: '3'},
  ])
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/*To Form*/}
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) => (
              <Text>{ item.text }</Text>
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


