import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Send from '../screens/Send';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

const AppStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{header: () => null}}
    />
    <Stack.Screen name="Home" component={Home} options={{header: () => null}} />
    <Stack.Screen name="Send" component={Send} options={{header: () => null}} />
  </Stack.Navigator>
);

export default AppStack;
