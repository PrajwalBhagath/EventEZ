/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {CardList} from 'react-native-card-list';

import ImageOverlay from 'react-native-image-overlay';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.backgroundStyle}>
      <ImageOverlay
        source={require('./event.jpeg')}
        overlayColor="grey"
        style={styles.ImageOverlayView}
        height="20%">
        <Text style={{fontSize: 30, color: '#fff'}}>EventEZ</Text>
      </ImageOverlay>
      <ScrollView />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageOverlayView: {
    width: 500,
    height: 100,
  },
  backgroundStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const Events = [
  {
    id: '0',
    title: 'Starry Night',
    picture: require('event.jpeg'),
    content: <Text>Starry Night</Text>,
  },
];
export default App;
