import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Styling = () => {
  return (
    <View style={{justifyContent: 'space-around', minHeight: 250}}>
      <Text>Styling: Inline, JS objects or StyleSheet.create</Text>
      <Text>It is not Pixels: DIP / Points</Text>
      <Text>All of the core components accept a prop named style</Text>
      <Text>All text has to be inside a {'< Text />'} component</Text>
      <Text>Style inheritance is limited to text subtrees (no cascade)</Text>
      <Text>Compose / Override styles with arrays</Text>
    </View>
  );
};

export default Styling;
