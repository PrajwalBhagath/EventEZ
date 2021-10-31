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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const UserProfile = ({route, navigation}) => {
  const [user, setUser] = React.useState(null);
  const [isOnShift, setIsOnShift] = React.useState(false);

  React.useEffect(() => {
    console.log(route.params);
    let {currentUser} = route.params;
    setUser(currentUser);
  }, [route.params]);

  function renderHeader() {
    console.log(user);
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
        <Text style={styles.TitleText}>{user?.name}</Text>
      </View>
    );
  }

  function renderContent() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/icon/user-icon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Name: </Text>
          <Text style={styles.Text}>{user?.name}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Role: </Text>
          <Text style={styles.Text}>{user?.role}</Text>
          {/* <Text>Role: {user?.role}</Text>
          <Text>Company: {user?.company}</Text>
          <Text>{user?.shift}</Text> */}
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Company: </Text>
          <Text style={styles.Text}>{user?.company}</Text>
        </View>
        <View style={styles.details}>
          <Text
            style={[
              user?.shift === 'On Shift' ? styles.onShift : styles.offShift,
              styles.Text,
            ]}>
            {user?.shift}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
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
  },
  onShift: {
    color: 'green',
  },
  offShift: {
    color: 'red',
  },
  details: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
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
    backgroundColor: '#fff',
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
export default UserProfile;
