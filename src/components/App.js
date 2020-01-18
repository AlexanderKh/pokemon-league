import React from 'react';
import styled from 'styled-components';
import PokemonLeague from './PokemonLeague';

function App() {
  return (
    <AppBlock>
      <PokemonLeague/>
    </AppBlock>
  );
}

export default App;

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > * {
    width: 600px;
    height: 400px;
  }
`;
