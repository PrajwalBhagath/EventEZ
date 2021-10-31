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
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
const {width, height} = Dimensions.get('window');

const EventDetails = ({route, navigation}) => {
  const [Event, setEvent] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    let {item} = route.params;
    setEvent(item);
  }, [route.params]);

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#FFFFFFFF'}}>
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
        <View style={styles.Location}>
          <Text style={styles.Date}>{Event?.Date}</Text>
          <Text style={styles.Date}>{Event?.Time}</Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('LaboursList', route.params)}>
          <Text style={styles.ButtonText}>Labourers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          // onPress={() => navigation.navigate('Event')}>
        >
          <Text style={styles.ButtonText}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.invite}>Invite</Text>
        </TouchableOpacity>
        <Modal transparent={true} visible={modalVisible}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 10,
                flex: 0.5,
                margin: 20,
                borderRadius: 30,
                marginTop: height / 2 - 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  color: 'green',
                }}>
                Invite Labourers
              </Text>
              <QRCode value="{Event?.name}" />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.CloseButton}>
                <Text style={styles.ButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
  Content: {
    backgroundColor: '#FFFFFFFF',
  },
  Button: {
    backgroundColor: '#FFF',
    width: width - 40,
    height: 50,
    borderRadius: 30,
    borderColor: 'Black',
    borderWidth: 1,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  CloseButton: {
    backgroundColor: '#FFF',
    width: width - 70,
    height: 50,
    borderRadius: 30,
    borderColor: 'Black',
    borderWidth: 1,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  invite: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'green',
    Position: 'absolute',
    textAlign: 'left',
  },
  ButtonText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'red',
    Position: 'absolute',
    textAlign: 'left',
  },
  body: {
    flexDirection: 'row',
  },
  Location: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  header: {
    height: 200,
    backgroundColor: '#FFFFFFFF',
  },
  Date: {
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 70,
    marginTop: 10,
    marginBottom: 10,
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
