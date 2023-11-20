import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../Layout';

const Home = () => {
  return (
    <Layout>
    <View style={styles.container}>
        <Text>Welcome to iVote!</Text>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },  
  });

  export default Home;