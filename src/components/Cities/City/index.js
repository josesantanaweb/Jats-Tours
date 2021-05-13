import React from 'react';
import Text from '../../Text';

import * as S from './styles';

const City = ({label}) => {
  return (
    <S.City>
      <Text color="white" uppercase="uppercase">
        {label}
      </Text>
      <Text color="white" size="xlarge" weight="bold" uppercase="uppercase">
        Mia
      </Text>
      <Text color="white">Miami</Text>
    </S.City>
  );
};

export default City;
