import React from 'react';
import {Text as StyledText} from './styles';

const Text = ({children, color, size, weight}) => {
  return (
    <StyledText color={color} size={size} weight={weight}>
      {children}
    </StyledText>
  );
};

export default Text;
