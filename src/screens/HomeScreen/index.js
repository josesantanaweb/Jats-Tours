import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import Container from '../../components/Container';

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Send')}>
        <Text>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;
