import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {SearchBar} from './components/SearchBar';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
  }

  body {
    box-sizing: border-box;
  }
`;


function App() {
  return (
      <>
        <GlobalStyles />
        <SearchBar/>
      </>
  );
}

export default App;
