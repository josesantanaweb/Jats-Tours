import React from 'react';
import City from './City';

import * as S from './styles';

const Cities = ({change}) => {
  return (
    <S.Cities>
      <City label="De" />
      <S.Change
        source={require('../../assets/img/change.png')}
        onClick={change}
      />
      <City label="A" />
    </S.Cities>
  );
};

export default Cities;
