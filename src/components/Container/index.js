import React, {useContext} from 'react';
import {Container as StyledContainer} from './styles';
import {ThemeContext} from 'styled-components';

export const Container = ({children, theme}) => {
  const {colors, title} = useContext(ThemeContext);
  return <StyledContainer theme={theme}>{children}</StyledContainer>;
};

export default Container;
