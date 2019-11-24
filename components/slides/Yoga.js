import React from 'react';
import {View, Text} from 'react-native';
import Box from './../core/Box';
import {Colors} from '../theme';

const Yoga = () => {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        minHeight: 400,
      }}>
      <Text>
        Yoga is an open-source, cross-platform layout library that implements
        Flexbox.
      </Text>
      <Text>
        Expressive layout library, not implementing all of CSS (just bits that
        have impact on layout)
      </Text>
      <Text>RTL is a first-class citizen</Text>
      <Text>https://yogalayout.com/playground</Text>

      <View
        style={{
          // justifyContent: 'flex-start',
          // height: 200,
          // alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.border,
        }}>
        <Box green></Box>
        <Box red></Box>
        <Box yellow></Box>
      </View>
    </View>
  );
};
export default Yoga;
