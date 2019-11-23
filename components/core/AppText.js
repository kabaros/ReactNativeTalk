import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {style} from '../../themes';

const getDefaultStyle = ({h1, h2}) => {
  if (h1) return style.h1;
  if (h2) return style.h2;

  return style.normal;
};

const AppText = props => {
  const {centered, style} = props;

  const defaultStyle = getDefaultStyle(props);
  const finalStyle = [
    defaultStyle,
    {textAlign: centered ? 'center' : 'auto'},
    props.style,
  ];

  return <Text style={finalStyle}>{props.children}</Text>;
};

const styles = StyleSheet.create({});
export default AppText;
