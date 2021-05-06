import React from 'react';
import * as S from './styles';

const Link = ({label, disabled, size, onPress, ...props}) => {
  return (
    <S.Wrapper onPress={onPress} disabled={disabled} {...props}>
      <S.Label size={size}>{label}</S.Label>
    </S.Wrapper>
  );
};

export default Link;
