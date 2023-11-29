import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../Layout';

const Setting = ({GlobalStates}) => {
  const {postalCode, setPostalCode} = GlobalStates;
  return (
    <Layout>
    <View>
      <Text>Setting</Text>
      <Text>Your saved postal code is {postalCode}</Text>
    </View>
    </Layout>
    
  )
}

export default Setting;