import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const LaboursList = ({route, navigation}) => {
  const [Event, setEvent] = React.useState(null);

  React.useEffect(() => {
    let {item} = route.params;
    setEvent(item);
  }, [route.params]);

  //   LaboursList = Event.Labourers.map((item, index);
  function renderHeader() {
    // console.log(Event);
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

  function renderLabours() {
    const renderItem = ({item}) => {
      console.log(item);
      return (
        <TouchableOpacity
          style={styles.LaboursList}
          onPress={() =>
            navigation.navigate('UserProfile', {currentUser: item})
          }>
          <View style={styles.names}>
            <Image
              source={require('../assets/icon/user.png')}
              style={styles.icon}
            />
            <Text style={styles.LaboursName}>{item.name}</Text>
            <Text style={styles.LaboursRole}>{item.role}</Text>
          </View>
        </TouchableOpacity>
      );
      //   return <Text>{item.name}</Text>;
      //   return item.map((item, index) => <Text key={index}>{item.id}</Text>);
    };
    return (
      <FlatList
        data={Event?.Labourers}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.List}
      />
    );
  }
  return (
    <SafeAreaView>
      {renderHeader()}
      {renderLabours()}
      {/* <Text style={{color: 'black', fontSize: 30}}>{Event?.name}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  names: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
  },
  LaboursName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    // marginLeft: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  LaboursRole: {
    fontSize: 15,
    color: 'black',
    fontWeight: '200',
    marginRight: 20,
    alignContent: 'flex-end',
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

export default LaboursList;
