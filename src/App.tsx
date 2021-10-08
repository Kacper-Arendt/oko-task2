import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import {SearchBar} from './components/SearchBar';
import {Repositories} from "./components/Repositories";

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
    const [searchTerm, setSearchTerm] = useState<string>('');

    function callbackFunction(searchTerm: string): void {
        setSearchTerm(searchTerm);
    }

    return (
        <>
            <GlobalStyles/>
            <SearchBar callback={callbackFunction}/>
            <Repositories searchTerm={searchTerm}/>
        </>
    );
}

export default App;
