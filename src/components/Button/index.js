import React from 'react';
import {Wrapper, Label} from './styles';

const Button = ({label, color, disabled, onPress, navigation, ...props}) => {
  return (
    <Wrapper onPress={onPress} color={color} disabled={disabled} {...props}>
      <Label color={color}>{label}</Label>
    </Wrapper>
  );
};

export default Button;
