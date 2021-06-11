import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Send from '../screens/Send';
import Onboarding from '../screens/Onboarding';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AppStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLauncher').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLauncher', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Send"
          component={Send}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    );
  } else {
    return <Home />;
  }
};

export default AppStack;
