import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import FirstScreen from './screens/firstScreen';
import Home from './screens/home';
import Header from './components/header';
//import Navigator from './routes/homeStack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator initialRouteName="FirstScreen">
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const navigationTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 127, 80)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6CB6EC',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 44,
    fontWeight: 'bold',
  },

  sectionExtra: {
    paddingTop: 20,
    fontSize: 20,
  },

  sectionExtra2: {
    paddingTop: 80,
    fontSize: 20,
  },

  sectionExtra3: {
    paddingTop: 80,
    fontSize: 20,
  },

  sectionExtra4: {
    paddingTop: 80,
    fontSize: 20,
  },

  items: {},
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
