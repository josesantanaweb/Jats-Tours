import React from 'react';
import {Wrapper, Label} from './styles';

const Button = ({
  theme,
  label,
  color,
  disabled,
  onPress,
  navigation,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Button;
