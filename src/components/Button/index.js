import React, {useContext} from 'react';
import {Button as StyledButton} from './styles';
import {ThemeContext} from 'styled-components';

export const Button = ({toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext);
  return (
    <StyledButton
      onValueChange={toggleTheme}
      value={title === 'dark'}
      trackColor={{false: '#767577', true: '#000'}}
      thumbColor={toggleTheme ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};

export default Button;
