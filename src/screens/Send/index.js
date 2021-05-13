import React from 'react';
import {View} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Text from '../../components/Text';
import * as S from './styles';

const Send = ({navigation}) => {
  return (
    <Container color="primary">
      <S.Content>
        <S.Icon source={require('../../assets/img/checked.png')} />
        <View style={{marginBottom: 20}}>
          <Text size="large" color="white">
            Solicitud Enviada
          </Text>
        </View>
        <Text color="white" align="center">
          Su solicitud se ha enviado con éxito en breve nuestros agentes se
          comunicaran con usted. Tambien puedes comunicarte al siguiente numero
          (0241) 3422122
        </Text>
      </S.Content>
      <S.Footer>
        <Button
          label="Volver"
          color="white"
          onPress={() => navigation.navigate('Register')}
        />
      </S.Footer>
    </Container>
  );
};

export default Send;
