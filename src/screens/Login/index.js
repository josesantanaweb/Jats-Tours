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

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, loading} = useContext(AuthContext);

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
            Inicia Sesión
          </Text>
        </S.Top>
        <Input
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="Ingrese correo electronico"
          label="Correo Electronico"
        />
        <Input
          placeholder="Ingrese su numero contraseña"
          label="Contraseña"
          secureTextEntry
          onChangeText={userPassword => setPassword(userPassword)}
        />
      </S.Content>
      <S.Footer>
        <Button
          label="Inicia Sesion"
          color="primary"
          onPress={() => login(email, password)}
        />
        <S.FooterText>
          <Text>¿No tienes una cuenta?</Text>
          <View style={{marginLeft: 10}}>
            <Link
              label="Registrate"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </S.FooterText>
      </S.Footer>
    </Container>
  );
};

export default Login;
