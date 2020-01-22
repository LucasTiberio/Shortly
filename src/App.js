import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Home from './Pages/Home'

import "../node_modules/bootstrap/dist/css/bootstrap.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const Theme = {
  Cyan: 'hsl(180, 66%, 49%)',
  DarkViolet: 'hsl(257, 27%, 26%)',
  Red: 'hsl(0, 87%, 67%)',
  Gray: 'hsl(0, 0%, 75%)',
  LightGray: '#f2f2f2',
  LightBlack: 'hsl(255, 11%, 22%)',
  DarkGray: 'hsl(0, 0%, 51%)',
  GrayishViolet: 'hsl(257, 7%, 63%)',
  VeryDarkViolet: 'hsl(260, 8%, 14%)'
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
