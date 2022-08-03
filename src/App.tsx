import React from 'react';

import { appTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import Calculator from './components/Calculator';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
