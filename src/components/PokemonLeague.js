import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonLeague extends Component {
  render() {
    return <PokemonLeagueBlock/>
  }
}

export default PokemonLeague;

const PokemonLeagueBlock = styled.div`
  display: block;
  background-color: rebeccapurple;
  width: 100%;
  height: 100%;
`;
