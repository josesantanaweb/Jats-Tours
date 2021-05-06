import React from 'react';
import {Wrapper, Label} from './styles';

const Button = ({label, color, disabled, onPress, navigation, ...props}) => {
  return (
    <Wrapper color={color} disabled={disabled} {...props}>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Button;
