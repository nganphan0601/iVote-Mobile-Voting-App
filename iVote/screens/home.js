import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../Layout';

const Home = (GlobalStates) => {
  const {postalCode, setPostalCode} = GlobalStates;
  return (
    <Layout>
    <View style={styles.container}>
        <Text>Welcome to iVote! :D</Text>
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