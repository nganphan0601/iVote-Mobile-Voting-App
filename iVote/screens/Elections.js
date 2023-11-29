import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../Layout';

const Elections = (GlobalStates) => {
  const {postalCode, setPostalCode} = GlobalStates;
  return (
    <Layout>
    <View>
      <Text>Elections</Text>
    </View>
    </Layout>
  )
}
export default Elections;