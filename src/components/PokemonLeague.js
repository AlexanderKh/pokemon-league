import React, { Component } from 'react';
import styled from 'styled-components';

import PokemonLineup from './PokemonLineup';
import PokemonConfigurator from './PokemonConfigurator';
import PokedexArea from './PokedexArea';

class PokemonLeague extends Component {
  render() {
    return <PokemonLeagueBlock name='PokemonLeague'>
      <PokemonLeagueLeftPane>
        <PokemonLineup/>
        <PokemonConfigurator/>
      </PokemonLeagueLeftPane>
      <PokedexArea/>
    </PokemonLeagueBlock>
  }
}

export default PokemonLeague;

const PokemonLeagueBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  min-width: 600px;
  min-height: 400px;
  width: 60%;
  height: 60%;
  
  border: 2px dashed darkgray;
  
  & > * {
    width: 100%;
    height: 100%;
  
    border-left: 1px dashed lightgray; 
    border-right: 1px dashed lightgray;
    &:first-child { border-left: none }
    &:last-child { border-right: none }
  }
`;

const PokemonLeagueLeftPane = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  width: 100%;
  flex-basis: 150%;
  
  & > * {
    width: 100%;
    height: 100%;
    
    border-top: 1px dashed lightgray; 
    border-bottom: 1px dashed lightgray;
    &:first-child { border-top: none }
    &:last-child { border-bottom: none }
  }
`;
