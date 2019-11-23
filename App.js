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
import {Colors, Metrics, Styles} from './components/theme';
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
            <AppText centered style={[Styles.h1]}>
              Intro to React Native {'\r'}
              <AppText style={[Styles.h2]}>(Layout and Styling)</AppText>
            </AppText>
            <TopicsList />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <AppText style={styles.footerText}>Mozafar @kabaros</AppText>
          <AppText style={styles.footerText}>
            github.com/kabaros/ReactNativeTalk
          </AppText>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
  },
  sectionContainer: {
    marginTop: Metrics.section,
    paddingHorizontal: Metrics.section,
  },
  sectionTitle: {
    textAlign: 'center',
  },
  footer: {
    // backgroundColor: 'black',
    // height: 30,
    backgroundColor: Colors.footer,
    alignItems: 'flex-end',
    margin: 20,
  },
  footerText: {
    ...Styles.small,
    color: Colors.lighterText,
  },
  safeArea: {
    backgroundColor: Colors.footer,
    flex: 1,
  },
});

export default App;
