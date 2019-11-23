import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {TopicDetails} from './TopicDetails';
import AppText from './core/AppText';
import {Metrics, Colors, Styles} from './theme';
import Styling from './slides/Styling';
import ScalingStyles from './slides/ScalingStyles';

export const TopicDescription = props => {
  const {topic, onClickMoreInfo, showMoreInfo} = props;
  const {title, subtitle, details, component} = topic;

  const CustomComponent = component ? getCustomCompnent(component) : null;

  return (
    <>
      <TouchableOpacity
        onPress={onClickMoreInfo}
        style={[styles.topicContainer]}>
        <AppText
          style={[
            styles.topicHeader,
            styles.titleStyle,
            !showMoreInfo ? Styles.small : null,
          ]}>
          {title}
        </AppText>
        <AppText
          style={[
            styles.topicHeader,
            styles.subTitleStyle,
            !showMoreInfo ? Styles.small : null,
          ]}>
          {subtitle}
        </AppText>
      </TouchableOpacity>
      {showMoreInfo && CustomComponent}
      {showMoreInfo && details && <TopicDetails bulletPoints={details} />}
    </>
  );
};

const getCustomCompnent = name => {
  if (name === 'Styling') {
    return <Styling />;
  }
  if (name === 'ScalingStyles') {
    return <ScalingStyles />;
  }
};

const styles = StyleSheet.create({
  topicContainer: {
    flexDirection: 'row',
    margin: Metrics.marginVertical,
    borderBottomColor: Colors.border,
    borderBottomWidth: Metrics.horizontalLineHeight,
  },
  topicHeader: {
    paddingTop: Metrics.doublePadding,
    paddingBottom: Metrics.padding,
  },
  titleStyle: {
    ...Styles.regular,
    flex: 3,
    color: Colors.highlightText,
  },
  subTitleStyle: {
    ...Styles.medium,
    flex: 2,
  },
});
