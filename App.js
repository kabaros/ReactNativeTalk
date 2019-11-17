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

import {TopicDescription} from './components/TopicDescription';
import topics from './topics';

const App: () => React$Node = () => {
  const [topicToShow, toggleTopicToShow] = useState(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
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
});

export default App;
