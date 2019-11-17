import React, {Fragment} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const TopicDetails = ({bulletPoints}) => {
  return (
    <View style={styles.container}>
      {bulletPoints.map((point, index) => {
        return (
          <View key={index} style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>{point}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bulletContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    marginLeft: 10,
  },
  bulletPoint: {
    color: '#444',
    fontSize: 16,
    lineHeight: 28,
    padding: 10,
  },
});
