import React from 'react';
import {Title as StyledTitle} from './styles';

export const Title = ({children, theme}) => {
  return <StyledTitle theme={theme}>{children}</StyledTitle>;
};

export default Title;
