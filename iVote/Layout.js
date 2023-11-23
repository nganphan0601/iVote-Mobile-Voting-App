import React from 'react';
import { Platform, StatusBar, SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Nunito_600SemiBold, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import Header from './header';
import { useRoute } from '@react-navigation/native';

const Layout = ({children}) => {
  const route = useRoute();
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
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 1)" />

      {/* the header component is 1/12 of the screen */}
      <Header title={route.name}/>
      {/* the body is 10/12 of the screen */}
      <View style={styles.body}>
        {children}
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
  
  body: {
    flex: 10,
    backgroundColor: 'white',
  },
  
});
export default Layout;
