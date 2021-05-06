import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import SendScreen from '../screens/SendScreen';

const Stack = createStackNavigator();

const AppStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Send"
      component={SendScreen}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default AppStack;
