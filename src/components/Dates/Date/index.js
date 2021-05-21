import React from 'react';
import Text from '../../Text';
import {View} from 'react-native';
import {
  monthFormat,
  dayLabelFormat,
  dayFormat,
} from '../../../utils/DateFormat';

import * as S from './styles';

const Date = ({label, style, onPress, date}) => {
  return (
    <S.Date style={style} onPress={onPress}>
      <View>
        <Text uppercase="uppercase">{label}</Text>
        <Text size="xlarge" color="primary" weight="bold">
          {dayFormat(date)}
        </Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text size="small" color="primary" weight="bold">
          {monthFormat(date)}.
        </Text>
        <Text size="small">{dayLabelFormat(date)}</Text>
      </View>
    </S.Date>
  );
};

export default Date;
