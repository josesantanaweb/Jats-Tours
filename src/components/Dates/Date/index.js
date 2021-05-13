import React from 'react';
import Text from '../../Text';
import {View} from 'react-native';

import * as S from './styles';

const Date = ({label, style}) => {
  return (
    <S.Date style={style}>
      <View>
        <Text uppercase="uppercase">{label}</Text>
        <Text size="xlarge" color="primary" weight="bold">
          25
        </Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text size="small" color="primary" weight="bold">
          Abr.
        </Text>
        <Text size="small">Domingo</Text>
      </View>
    </S.Date>
  );
};

export default Date;
