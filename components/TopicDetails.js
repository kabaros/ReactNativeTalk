import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Styles, Metrics, Sizes} from './theme';
import AppText from './core/AppText';
import {CopyLink} from './core/CopyLink';

export const TopicDetails = ({bulletPoints}) => {
  return (
    <View style={styles.container}>
      {bulletPoints.map((point, index) => {
        const {infoText, infoLink} = extractTopicInfo(point);
        return (
          <View key={index} style={styles.bulletContainer}>
            <AppText style={styles.bulletPoint}>{infoText}</AppText>
            {!!infoLink && <CopyLink link={infoLink} />}
          </View>
        );
      })}
    </View>
  );
};

const extractTopicInfo = point => {
  if (point && point.infoLink) {
    return {
      infoText: point.infoText,
      infoLink: point.infoLink,
    };
  } else
    return {
      infoText: point,
    };
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
