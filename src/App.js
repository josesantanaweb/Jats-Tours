import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
// import Switch from './components/Switch';
import Providers from './navigation';
import themes from './theme';

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Switch toggleTheme={toggleTheme} /> */}
      <Providers />
    </ThemeProvider>
  );
};

export default App;
