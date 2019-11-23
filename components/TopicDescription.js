import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {TopicDetails} from './TopicDetails';
import AppText from './core/AppText';
import {metrics, colors, style} from '../themes';

export const TopicDescription = props => {
  const {topic, onClickMoreInfo, showMoreInfo} = props;
  const {title, subtitle, details} = topic;

  return (
    <>
      <TouchableOpacity
        onPress={onClickMoreInfo}
        style={[styles.topicContainer]}>
        <AppText
          style={[
            styles.topicHeader,
            styles.titleStyle,
            !showMoreInfo ? style.small : null,
          ]}>
          {title}
        </AppText>
        <AppText
          style={[
            styles.topicHeader,
            styles.subTitleStyle,
            !showMoreInfo ? style.small : null,
          ]}>
          {subtitle}
        </AppText>
      </TouchableOpacity>
      {showMoreInfo && details && <TopicDetails bulletPoints={details} />}
    </>
  );
};

const styles = StyleSheet.create({
  topicContainer: {
    flexDirection: 'row',
    margin: metrics.marginVertical,
    borderBottomColor: colors.border,
    borderBottomWidth: metrics.horizontalLineHeight,
  },
  topicHeader: {
    paddingTop: metrics.doublePadding,
    paddingBottom: metrics.padding,
  },
  titleStyle: {
    ...style.regular,
    flex: 3,
    color: colors.highlightText,
  },
  subTitleStyle: {
    ...style.medium,
    flex: 2,
  },
});
