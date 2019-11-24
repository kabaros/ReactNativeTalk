import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../core/AppText';

const ScalingStyles = () => {
  return (
    <View style={{justifyContent: 'space-around', minHeight: 300}}>
      <AppText>
        Create a component "CustomText" that encapsulates Text and use this
        component across your app
      </AppText>
      <AppText>Use StyleSheet.create()</AppText>
      <AppText>Theming: Abstract away Fonts, Base Metrics and Colors</AppText>
      <AppText>Android vs iOS</AppText>
      <AppText>Scaling font sizes and dimensions</AppText>
      <AppText>Styled Components</AppText>
    </View>
  );
};

// Scaling Font Size: https://github.com/knowbody/react-native-text
// Styled Components: https://www.styled-components.com/docs/basics#react-native

export default ScalingStyles;
