import React from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

import * as S from './styles';

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <View>
        <S.Header>
          <S.Logo source={require('../../assets/img/logo.png')} />
        </S.Header>
        <S.Top>
          <Text size="medium" weight="bold">
            Registro
          </Text>
        </S.Top>
        <Input
          placeholder="Ingrese nombre y apellido"
          label="Nombre y Apellido"
        />
        <Input
          placeholder="Ingrese correo electronico"
          label="Correo Electronico"
        />
        <Input placeholder="Ingrese su numero telefono" label="Telefono" />
        <Input placeholder="Ingrese su numero contraseña" label="Contraseña" />
      </View>
      <S.Footer>
        <Button
          label="Registro"
          color="primary"
          onPress={() => navigation.navigate('Login')}
        />
        <S.FooterText>
          <Text size="medium">¿Ya tienes una cuenta?</Text>
          <View style={{marginLeft: 10}}>
            <Link
              size="medium"
              label="Inicia Sesión"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </S.FooterText>
      </S.Footer>
    </Container>
  );
};

export default RegisterScreen;
