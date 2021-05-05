import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default AppStack;
