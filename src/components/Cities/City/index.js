import React from 'react';
import Text from '../../Text';

import * as S from './styles';

const City = ({label, onPress, country}) => {
  return (
    <S.City onPress={onPress}>
      <Text color="white" uppercase="uppercase">
        {label}
      </Text>
      <Text color="white" size="xlarge" weight="bold" uppercase="uppercase">
        {country.iata}
      </Text>
      <Text color="white">
        {country.region_name.length > 10
          ? country.region_name.substring(0, 15 - 3) + '...'
          : country.region_name}
      </Text>
    </S.City>
  );
};

export default City;
