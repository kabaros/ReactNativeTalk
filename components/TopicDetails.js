import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, style, metrics, size} from '../themes';
import AppText from './core/AppText';

export const TopicDetails = ({bulletPoints}) => {
  return (
    <View style={styles.container}>
      {bulletPoints.map((point, index) => {
        return (
          <View key={index} style={styles.bulletContainer}>
            <AppText style={styles.bulletPoint}>{point}</AppText>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bulletContainer: {
    borderBottomWidth: metrics.horizontalLineHeight,
    borderBottomColor: colors.border,
    paddingLeft: metrics.marginHorizontal,
  },
  bulletPoint: {
    ...style.normal,
    color: colors.lighterText,
    lineHeight: size.regular * 1.5,
    padding: metrics.padding,
  },
});
