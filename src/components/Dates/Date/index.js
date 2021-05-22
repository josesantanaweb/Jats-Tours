import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import Text from '../../Text';
import {View} from 'react-native';

import * as S from './styles';

const Date = ({label, style, onPress, date, disabled}) => {
  return (
    <S.Date style={style} onPress={onPress} disabled={disabled}>
      <View>
        <Text uppercase="uppercase">{label}</Text>
        <Text size="xlarge" color={!disabled ? 'primary' : ''} weight="bold">
          {moment(date).format('DD')}
        </Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text size="small" color={!disabled ? 'primary' : ''} weight="bold">
          {moment(date).format('MMMM')}.
        </Text>
        <Text size="small">{moment(date).format('dddd')}</Text>
      </View>
    </S.Date>
  );
};

export default Date;
