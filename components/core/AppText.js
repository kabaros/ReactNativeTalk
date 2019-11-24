import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Styles, Colors} from '../theme';

const getDefaultStyle = ({h1, h2, small}) => {
  if (h1) return Styles.h1;
  if (h2) return Styles.h2;
  if (small) return Styles.small;

  return Styles.normal;
};

const AppText = props => {
  const {centered, style} = props;

  const defaultStyle = getDefaultStyle(props);
  const finalStyle = [
    defaultStyle,
    {color: Colors.text},
    {textAlign: centered ? 'center' : 'auto'},
    props.style,
  ];

  return <Text style={finalStyle}>{props.children}</Text>;
};

const styles = StyleSheet.create({});
export default AppText;
