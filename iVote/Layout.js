import React from 'react';
import { Platform, StatusBar, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useFonts, Nunito_600SemiBold, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Navigation } from 'react-native-navigation';


const Layout = ({children}) => {
  // this is for the fonts
  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    // the parent view is the entire screen
    <SafeAreaView
      style={[styles.container, styles.safeArea]}
    >
      {/* the header is 1/12 of the screen */}
      <View style={styles.header}>
        <Text style={styles.headerText}>App's Header</Text>
      </View>
      {/* the body is 10/12 of the screen */}
      <View style={styles.body}>
        {children}
      </View>
      {/* the footer is 1/12 of the screen */}
      <View style={styles.navigator}>
        <Text>App's Navigation</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header:{
    flex: 1, 
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    borderColor: '#540007',
    borderBottomWidth: 1,
    paddingLeft: 20,
    backgroundColor: '#A1000E',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
  },
  body: {
    flex: 10,
    backgroundColor: 'yellow',
  },
  navigator: {
    flex: 1, 
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    borderColor: '#C2C8CF',
    borderTopWidth: 0.3,
  },
});
export default Layout;
