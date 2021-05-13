import React from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

import * as S from './styles';

const Login = ({navigation}) => {
  return (
    <Container>
      <S.Content>
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
      </S.Content>
      <S.Footer>
        <Button
          label="Inicia Sesion"
          color="primary"
          onPress={() => navigation.navigate('Home')}
        />
        <S.FooterText>
          <Text>¿No tienes una cuenta?</Text>
          <View style={{marginLeft: 10}}>
            <Link
              label="Registrate"
              onPress={() => navigation.navigate('Send')}
            />
          </View>
        </S.FooterText>
      </S.Footer>
    </Container>
  );
};

export default Login;
