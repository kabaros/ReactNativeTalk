import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import AppText from '../core/AppText';

const ScalingStyles = () => {
  return (
    <View style={{justifyContent: 'space-around', minHeight: 300}}>
      <AppText>
        Create a component "CustomText" that encapsulates Text and use this
        component across your app
      </AppText>
      <AppText>Use StyleSheet.create()</AppText>
      <AppText>Theming: abstract Fonts, Base Metrics and Colors</AppText>
      <AppText>Android vs iOS</AppText>
      <AppText>Scaling font sizes</AppText>
      <AppText>Styled Components</AppText>
    </View>
  );
};

export default ScalingStyles;
