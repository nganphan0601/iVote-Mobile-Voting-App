/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = ({children}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>App's Header</Text>
      </View>
      <View style={{flex: 10, backgroundColor: 'yellow'}}>
        {children}
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>App's Navigation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Layout;
