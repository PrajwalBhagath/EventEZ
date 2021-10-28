/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CardList} from 'react-native-card-list';

import ImageOverlay from 'react-native-image-overlay';

const CreateEvent = () => {
  return (
    <View style={styles.backgroundStyle}>
      <ImageOverlay
        source={{
          uri: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        overlayColor="grey"
        style={styles.ImageOverlayView}
        height="20%">
        <Text style={{fontSize: 30, color: '#fff'}}>Create Event</Text>
      </ImageOverlay>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageOverlayView: {
    width: 500,
    height: 100,
  },
  backgroundStyle: {
    backgroundColor: '#FFFFFFFF',
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

export default CreateEvent;
