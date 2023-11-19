/* eslint-disable no-use-before-define */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput, Image,
} from 'react-native';
import Layout from './Layout';

export default function App() {
  const [name, setName] = React.useState('');

  return (
    <Layout>
      <View style={styles.container}>
        <Text>Welcome to iVote!</Text>
        <TextInput
          style={styles.input}
          defaultValue="What is your name?"
          onChangeText={(text) => setName(text)}
        />
        <Text>
          Hello
          {' '}
          {name}
          !
        </Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
