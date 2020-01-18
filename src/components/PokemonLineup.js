import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonLineup extends Component {
  render() {
    return <PokemonLineupBlock/>
  }
}

export default PokemonLineup;

const PokemonLineupBlock = styled.div`
  display: block;
  background-color: green;
  width: 100%;
  height: 100%;
`;
