import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const EventDetails = ({route, navigation}) => {
  const [Event, setEvent] = React.useState(null);

  React.useEffect(() => {
    let {item} = route.params;
    setEvent(item);
  }, [route.params]);

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
        <Text style={styles.TitleText}>{Event?.name}</Text>
      </View>
    );
  }

  function renderContent() {
    return (
      <View style={styles.Content}>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
          <Image
            source={{uri: `${Event?.Image}`}}
            style={{
              width: '100%',
              height: 200,
              alignContent: 'center',
              alignSelf: 'center',
              // borderRadius: 20,
              marginTop: 20,
            }}
          />
          <Text style={styles.ContentText}>Description</Text>
          <Text style={styles.Description}>{Event?.Description}</Text>
        </View>
        <View style={styles.body}>
          <Image
            source={require('../assets/icon/location.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 20,
              marginTop: 20,
            }}
          />

          <Text
            style={{
              marginTop: 15,
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Location
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontSize: 30,
              fontWeight: '200',
              marginLeft: 20,
            }}>
            {Event?.Location}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFFFF',
    flex: 1,
  },
  body: {
    flexDirection: 'row',
  },
  header: {
    height: 200,
    backgroundColor: '#FFFFFFFF',
  },
  TitleText: {
    fontSize: 50,
    fontFamily: '../',
    fontWeight: 'bold',
    color: '#F95700FF',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    lineHeight: 56,
    marginTop: 10,
    marginLeft: 20,
    marginRight: width / 2,
  },
  Description: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  ContentText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 0,
  },
});

export default EventDetails;
