import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
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
        <Button toggleTheme={toggleTheme} />
        <Title>dawdawd</Title>
      </Container>
    </ThemeProvider>
  );
};

export default App;
