/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppText from './components/core/AppText';
import {colors, metrics, style} from './themes';
import TopicsList from './components/TopicsList';

import Styling from './components/slides/Styling';
import ScalingStyles from './components/slides/ScalingStyles';

const App: () => React$Node = () => {
  const [topicToShow, toggleTopicToShow] = useState(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <AppText centered style={[style.h1]}>
              Intro to React Native {'\r'}
              <AppText style={[style.h2]}>(Layout and Styling)</AppText>
            </AppText>
            <TopicsList />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <AppText style={styles.footerText}>Mozafar @kabaros</AppText>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.background,
  },
  sectionContainer: {
    marginTop: metrics.doubleSection,
    paddingHorizontal: metrics.section,
  },
  sectionTitle: {
    textAlign: 'center',
  },
  footer: {
    // backgroundColor: 'black',
    // height: 30,
    backgroundColor: colors.footer,
    alignItems: 'flex-end',
    margin: 20,
  },
  footerText: {
    ...style.small,
    color: colors.lighterText,
  },
  safeArea: {
    backgroundColor: colors.footer,
    flex: 1,
  },
});

export default App;
