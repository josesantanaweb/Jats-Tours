import React from 'react';

import * as S from './styles';

const Options = () => {
  return (
    <S.Options>
      <S.Option>
        <S.OptionText>Solo Ida</S.OptionText>
      </S.Option>
      <S.Option active>
        <S.OptionText active>Ida y Vuelta</S.OptionText>
      </S.Option>
    </S.Options>
  );
};

export default Options;
