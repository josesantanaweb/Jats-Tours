import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Switch from './components/Switch';
import Container from './components/Container';
import Title from './components/Title';
import themes from './theme';

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Switch toggleTheme={toggleTheme} />
        <Title>titulo</Title>
        <Button label="Hecho" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
