import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {TopicDetails} from './TopicDetails';

export const TopicDescription = props => {
  const {topic, onClickMoreInfo, showMoreInfo} = props;
  const {title, subtitle, details} = topic;

  return (
    <>
      <TouchableOpacity
        onPress={onClickMoreInfo}
        style={[styles.topicContainer]}>
        <Text style={[styles.titleStyle, !showMoreInfo ? styles.small : null]}>
          {title}
        </Text>
        <Text
          style={[styles.subTitleStyle, !showMoreInfo ? styles.small : null]}>
          {subtitle}
        </Text>
      </TouchableOpacity>
      {showMoreInfo && details && <TopicDetails bulletPoints={details} />}
    </>
  );
};

const styles = StyleSheet.create({
  topicContainer: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  small: {
    fontSize: 10,
  },

  titleStyle: {
    flex: 3,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '400',
    color: '#1292B4',
  },
  subTitleStyle: {
    flex: 2,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  moreInfo: {
    textAlign: 'center',
    color: '#003459',
    fontSize: 16,
    lineHeight: 24,
  },
});
