import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PlaceholderImage = require('../assets/placeholder.png');

export default function FirstScreen({ navigation, GlobalStates }) {
  const {postalCode, setPostalCode} = GlobalStates
  //const [postalCode, setPostalCode] = React.useState('');

  const storePostalCode = async () => {
    try {
      await AsyncStorage.setItem('postalCode', postalCode);
      navigation.navigate('Main')
    } catch (e) {
      console.log(e)
    }
  };

  const getPostalCode = async () => {
    try {
      const value = await AsyncStorage.getItem('postalCode');
      if (value !== null) {
        setPostalCode(value)
      }
    } catch (e) {
      console.log(e)
    }
  };
  React.useEffect(()=> { //anything in here runs once the app starts
    getPostalCode();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image}></Image>
        </View>
        <Text style={styles.whiteText}>Enter Postal Code: {postalCode}</Text>
        <TextInput style={styles.textbox} placeholder='e.g. A9A 9A9' onChangeText={value => setPostalCode(value)}/>
      <View style={styles.footerContainer}>
         <Button theme="primary" label="Next" onPress={storePostalCode} />
      </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 120,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff'
  },
  textbox: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    color: '#fff',
  },
});
