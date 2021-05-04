import React, {useContext} from 'react';
import {Title as StyledTitle} from './styles';
import {ThemeContext} from 'styled-components';

export const Title = ({children, theme}) => {
  const {colors, title} = useContext(ThemeContext);
  return <StyledTitle theme={theme}>{children}</StyledTitle>;
};

export default Title;
