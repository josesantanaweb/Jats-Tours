import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import Date from './Date';

import * as S from './styles';

const Dates = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <S.Dates>
      <Date
        label="Salida"
        style={{
          borderRightWidth: 1,
          borderRightColor: colors.graylight,
        }}
      />
      <Date label="Vuelta" />
    </S.Dates>
  );
};

export default Dates;
