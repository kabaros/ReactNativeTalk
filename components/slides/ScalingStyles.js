import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const ScalingStyles = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        color: 'red',
        minHeight: 200,
      }}>
      <Text style={{color: 'green'}}>
        All text has to be inside a {'< Text />'} component
      </Text>
      <Text>Styles are normal JS objects (but use StyleSheet.create)</Text>
      <Text>All of the core components accept a prop named style</Text>
      <Text>Style inheritance is limited to text subtrees (no cascade)</Text>
    </View>
  );
};

export default ScalingStyles;
