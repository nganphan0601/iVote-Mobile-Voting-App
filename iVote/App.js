// This is the homepage of the app. User sees this after logging in from the startup page.
import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Image,
} from 'react-native';
import Layout from './Layout';
import Home from './screens/Home.js';
import Elections from './screens/Elections.js';
import Voting from './screens/Voting.js';
import Setting from './screens/Setting.js';
import Startup from './screens/Startup.js';
// import { Navigation } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    background: 'whitesmoke',
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'center',
}
}


export default function App() {

  return (
    <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <AntDesign name="home" size={24} color="black" />
                    <Text style={styles.tabText}>HOME</Text>
                  </View>
                )
            }}
            />
            <Tab.Screen name="Voting" component={Voting} 
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="location-outline" size={24} color="black" />
                  <Text style={styles.tabText}>VOTING</Text>
                </View>
              )
          }}
          />
            
            <Tab.Screen name="Elections" component={Elections} 
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center'}}>
                  <Feather name="archive" size={24} color="black" />
                  <Text style={styles.tabText}>ELECTIONS</Text>
                </View>
              )
          }}
          />
          <Tab.Screen name="Setting" component={Setting} 
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{  alignItems: 'center', justifyContent: 'center'}}>
                  <AntDesign name="setting" size={24} color="black" />
                  <Text style={styles.tabText}>SETTING</Text>
                </View>
              )
          }}
          />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabText: {fontSize: 12, color: "black", width: "100%"},
});


