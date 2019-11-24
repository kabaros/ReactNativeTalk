import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Styling = () => {
  return (
    <View style={{justifyContent: 'space-around', minHeight: 250}}>
      <Text>All of the core components accept a prop named style</Text>
      <Text>Styling: Inline, JS objects or StyleSheet.create</Text>
      <Text>Unitless: Density-Independent Pixels</Text>
      <Text>All text has to be inside a {'< Text />'} component</Text>
      <Text>No Cascade: style inheritance in text subtrees only</Text>
      <Text>You can Compose or Override styles with arrays</Text>
    </View>
  );
};

export default Styling;
