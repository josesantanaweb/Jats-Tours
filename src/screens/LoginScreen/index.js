import React from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

import * as S from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <View>
        <S.Header>
          <S.Logo source={require('../../assets/img/logo.png')} />
        </S.Header>
        <S.Top>
          <Text size="medium" weight="bold">
            Inicia Sesión
          </Text>
        </S.Top>
        <Input
          placeholder="Ingrese correo electronico"
          label="Correo Electronico"
        />
        <Input placeholder="Ingrese su numero contraseña" label="Contraseña" />
      </View>
      <S.Footer>
        <Button label="Inicia Sesion" color="primary" />
        <S.FooterText>
          <Text size="medium">¿No tienes una cuenta?</Text>
          <View style={{marginLeft: 10}}>
            <Link
              size="medium"
              label="Registrate"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </S.FooterText>
      </S.Footer>
    </Container>
  );
};

export default LoginScreen;
