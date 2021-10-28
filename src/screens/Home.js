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
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

import {images} from '../assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const Home = () => {
  //DUMMY DATA
  const Events = [
    {
      id: 0,
      name: 'Party',
      Date: '21/10/2021',
      Time: '10:00 AM',
      Location: 'Auckland',
      Description:
        'The party is to celebrate the finishing of the Mobile Systems paper',
      Image:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 1,
      name: 'Cricket Match',
      Date: '30/10/2021',
      Time: '10:00 AM',
      Location: 'Kathmandu',
      Description: 'Cricket match to raise funds for charity',
      Image:
        'https://images.unsplash.com/photo-1595207732481-22cccd3480fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80',
    },
    {
      id: 2,
      name: 'Concert',
      Date: '2/1/2022',
      Time: '10:00 AM',
      Location: 'Los Angeles',
      Description: 'The First Concert for the year',
      Image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
    },
  ];

  function renderHeader() {
    return (
      <View style={styles.ViewStyle}>
        <TouchableOpacity style={styles.TouchableOpacityStyle}>
          <Image
            source={require('../assets/icon/user.png')}
            resizeMode="contain"
            style={styles.ImageStyle}
          />
        </TouchableOpacity>

        <Text style={styles.TitleText}>EVENTS</Text>
      </View>
    );
  }

  function renderEventList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={styles.EventList}
        // onPress={() => {
      >
        <View>
          <Image
            source={{uri: `${item.Image}`}}
            resizeMode="cover"
            style={styles.EventImage}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 50,
            width: width * 0.3,
            backgroundColor: '#F95700FF',
            borderTopRightRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
          }}
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={Events}
        keyExtractor={item => `${item.name}`}
        renderItem={renderItem}
        contentContainerStyle={styles.List}
      />
    );
  }
  //Return for Home Screen
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.Container}>
        {renderHeader()}
        {renderEventList()}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFFF',
  },
  ViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFFFF',
  },
  EventList: {
    marginTop: 10,
    marginBottom: 10,
  },
  EventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  List: {
    backgroundColor: '#FFFFFFFF',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacityStyle: {
    width: 50,
    PaddingLeft: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  ImageStyle: {
    display: 'flex',
    width: 50,
    height: 50,
  },
  TitleText: {
    fontSize: 50,
    color: '#F95700FF',
    lineHeight: 56,
    marginLeft: 40,
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

export default Home;
