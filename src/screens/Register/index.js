import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Loading from '../../components/Loading';

import * as S from './styles';

const Register = ({navigation}) => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const {register, loading} = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <S.Content>
        <S.Header>
          <S.Logo source={require('../../assets/img/logo.png')} />
        </S.Header>
        <S.Top>
          <Text size="medium" weight="bold">
            Registro
          </Text>
        </S.Top>
        <Input
          onChangeText={userName => setName(userName)}
          placeholder="Ingrese nombre y apellido"
          label="Nombre y Apellido"
        />
        <Input
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="Ingrese correo electronico"
          label="Correo Electronico"
        />
        <Input
          placeholder="Ingrese su numero telefono"
          label="Telefono"
          onChangeText={userPhone => setPhone(userPhone)}
        />
        <Input
          placeholder="Ingrese su numero contraseña"
          label="Contraseña"
          onChangeText={userPassword => setPassword(userPassword)}
        />
      </S.Content>
      <S.Footer>
        <Button
          label="Registro"
          color="primary"
          onPress={() => register(name, phone, email, password)}
        />
        <S.FooterText>
          <Text>¿Ya tienes una cuenta?</Text>
          <View style={{marginLeft: 10}}>
            <Link
              label="Inicia Sesión"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </S.FooterText>
      </S.Footer>
    </Container>
  );
};

export default Register;
