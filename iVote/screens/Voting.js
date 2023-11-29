import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../Layout';

const Voting = (GlobalStates) => {
  const {postalCode, setPostalCode} = GlobalStates;
  return (
    <Layout>
    <View>
      <Text>Voting</Text>
    </View>
    </Layout>
  )
}

export default Voting;