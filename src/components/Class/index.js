import React from 'react';
import Text from '../Text';
import {View} from 'react-native';

import * as S from './styles';

const Class = ({label, style}) => {
  return (
    <S.Class style={style}>
      <View>
        <Text uppercase="uppercase" style={{marginBottom: 5}}>
          Clase
        </Text>
        <Text size="small" color="primary" weight="bold">
          Economica
        </Text>
      </View>
      <S.Arrow source={require('../../assets/img/arrow.png')} />
    </S.Class>
  );
};

export default Class;
