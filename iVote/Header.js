import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flex: 1, 
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderColor: '#ED182A',
        borderBottomWidth: 1,
        paddingLeft: 20,
        backgroundColor: '#A1000E',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      },
      headerText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Nunito_700Bold',
      },
    });

    export default Header;