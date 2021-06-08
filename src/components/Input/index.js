import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './styles';

const Input = ({
  label,
  value,
  placeholder,
  only,
  onChangeText,
  secureTextEntry,
  keyboardType,
  onBlur,
  onFocus,
  ...props
}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <S.Wrapper only={only}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        numberOfLines={1}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        {...props}
      />
    </S.Wrapper>
  );
};

export default Input;
