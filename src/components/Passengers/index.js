import React from 'react';
import Text from '../Text';
import {View} from 'react-native';

import * as S from './styles';

const Passengers = ({label, style}) => {
  return (
    <S.Passengers style={style}>
      <View>
        <Text uppercase="uppercase" style={{marginBottom: 5}}>
          Viajero
        </Text>
        <Text size="small" color="primary" weight="bold">
          1 adulto
        </Text>
      </View>
      <S.Arrow source={require('../../assets/img/arrow.png')} />
    </S.Passengers>
  );
};

export default Passengers;
