import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Styles, Metrics, Sizes} from './theme';
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
    borderBottomWidth: Metrics.horizontalLineHeight,
    borderBottomColor: Colors.border,
    paddingLeft: Metrics.marginHorizontal,
  },
  bulletPoint: {
    ...Styles.normal,
    color: Colors.lighterText,
    lineHeight: Sizes.regular * 1.5,
    padding: Metrics.padding,
  },
});
