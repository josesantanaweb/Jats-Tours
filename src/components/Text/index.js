import React from 'react';
import {Text as StyledText} from './styles';

const Text = ({children, color, size, weight, align}) => {
  return (
    <StyledText color={color} size={size} weight={weight} align={align}>
      {children}
    </StyledText>
  );
};

export default Text;
