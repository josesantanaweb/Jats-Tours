import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Providers from './navigation';
import themes from './theme';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  const [theme] = useState(themes.light);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Providers />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
