import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../theme';
import AppText from './AppText';
import {Clipboard} from 'react-native';

const copyClipboad = link => {
  Clipboard.setString(link);
};

export const CopyLink = ({link}) => {
  return (
    <TouchableOpacity
      style={styles.copyLink}
      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
      onPress={() => Clipboard.setString(link)}>
      <AppText style={{color: Colors.lighterText, opacity: 0.4}} small>
        🔗
      </AppText>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  copyLink: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
});
