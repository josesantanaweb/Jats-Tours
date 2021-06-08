import React from 'react';
import {View} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Text from '../../components/Text';
import * as S from './styles';

const Onboarding = ({navigation}) => {
  return (
    <Container color="primary">
      <S.Content>
        <S.Logo source={require('../../assets/img/logo-white.png')} />
        <View style={{marginBottom: 20}}>
          <Text size="large" color="white">
            Consulta Disponibilidad
          </Text>
        </View>
        <Text color="white" align="center">
          Curabitur aliquam condimentum neque non feugiat. Donec quis aliquam
          luctus eros
        </Text>
      </S.Content>
      <S.Footer>
        <Button
          label="Omitir"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
      </S.Footer>
    </Container>
  );
};

export default Onboarding;
