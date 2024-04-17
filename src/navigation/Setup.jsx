import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Weather from '../screens/Weather';
import {store} from '../redux/Store';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

/* Setup Redux and Navigation  Configurations */
const Setup = ({startScreen}) => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName={startScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Weather" component={Weather} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
};

export default Setup;
