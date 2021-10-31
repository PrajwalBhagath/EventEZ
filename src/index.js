import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  Home,
  UserProfile,
  EventDetails,
  CreateEvent,
  LaboursList,
} from './screens/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{title: 'Create Event'}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{title: 'User Profile'}}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{title: 'Event Details'}}
        />
        <Stack.Screen
          name="LaboursList"
          component={LaboursList}
          options={{title: 'Labourers List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
