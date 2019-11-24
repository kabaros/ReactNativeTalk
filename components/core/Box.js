import React from 'react';
import {View} from 'react-native';
const Box = ({red, green, yellow, style}) => {
  const backgroundColor = red ? 'red' : yellow ? 'yellow' : 'green';
  return (
    <View style={[{backgroundColor, width: 50, height: 50}, style]}></View>
  );
};

export default Box;
