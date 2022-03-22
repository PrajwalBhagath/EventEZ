/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';

const {width, height} = Dimensions.get('window');

const CreateEvent = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icon/back.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 20,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.TitleText}>New Event</Text>
      </View>
    );
  }

  function renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.profileText}>Lets Create An Event!</Text>

        <View style={styles.details}>
          <Text style={styles.Text}>Event Name</Text>
          <TextInput
            style={styles.title}
            value={'"Party"'}
            placeholder="Event Name"
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.Text}>Location</Text>
          <TextInput
            style={styles.title}
            value={'"Auckland"'}
            placeholder="Location"
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.Text}>Set Date</Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.title}>{date.toDateString()}</Text>
          </TouchableOpacity>
          <DatePicker
            mode="date"
            modal
            textColor="#fff"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.Text}>Description</Text>
          <TextInput
            style={styles.title}
            value={'"Party in Auckland"'}
            placeholder="Location"
          />
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 30}}>Create Event</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{color: 'black', fontSize: 30}}>{user?.name}</Text> */}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Text: {
    // color: 'black',
    fontSize: 30,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#F95700FF',
    width: width / 1.4,
    height: height * 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileText: {
    fontSize: 30,
    color: '#F95700FF',
    fontFamily: '../',
    fontWeight: 'bold',
    marginTop: 20,
    // marginLeft: 20,
  },

  onShift: {
    color: 'green',
  },
  offShift: {
    color: 'red',
  },
  details: {
    // borderBottomColor: '#e0e0e0',
    // borderBottomWidth: 1,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  title: {
    borderColor: '#e0e0e0',
    borderWidth: 3,
    width: width / 1.5,
    fontSize: 30,
    color: 'profileText',
    fontWeight: '200',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  profileContainer: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2,
    backgroundColor: '#FFFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 60,
  },
  container: {
    marginTop: 10,
    backgroundColor: '#FFFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2,
    height: width / 2,
    // marginTop: 20,
    // marginLeft: 20,
  },
  TitleText: {
    fontSize: 30,
    fontFamily: '../',
    fontWeight: 'bold',
    color: '#F95700FF',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    lineHeight: 56,
    marginTop: 7,
    marginLeft: 20,
    marginRight: width / 2,
  },
});
export default CreateEvent;
