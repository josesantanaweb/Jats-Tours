import React, {useContext} from 'react';
import {Switch as StyledSwitch} from './styles';
import {ThemeContext} from 'styled-components';

const Switch = ({toggleTheme}) => {
  const {title} = useContext(ThemeContext);
  return (
    <StyledSwitch
      onValueChange={toggleTheme}
      value={title === 'dark'}
      trackColor={{false: '#767577', true: '#000'}}
      thumbColor={toggleTheme ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};

export default Switch;
