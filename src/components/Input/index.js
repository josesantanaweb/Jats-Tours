import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './styles';

const Input = ({label, value, placeholder, ...props}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        value={value}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        {...props}
      />
    </S.Wrapper>
  );
};

export default Input;
