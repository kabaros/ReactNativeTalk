import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Styling = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        color: 'red',
        minHeight: 200,
      }}>
      <Text>Styles are normal JS objects (but use StyleSheet.create)</Text>
      <Text>All of the core components accept a prop named style</Text>
      <Text>All text has to be inside a {'< Text />'} component</Text>
      <Text>Style inheritance is limited to text subtrees (no cascade)</Text>
    </View>
  );
};

export default Styling;
