import React, {useContext, useState, useEffect} from 'react';
import {View} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Link from '../../components/Link';
import * as S from './styles';

const Onboarding = ({navigation}) => {
  const {logout} = useContext(AuthContext);

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
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Link color="white" label="Registrate" onPress={() => logout()} />
        </View>
      </S.Footer>
    </Container>
  );
};

export default Onboarding;
