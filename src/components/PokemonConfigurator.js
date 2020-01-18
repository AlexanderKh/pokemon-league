import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonConfigurator extends Component {
  render() {
    return <PokemonConfiguratorBlock/>
  }
}

export default PokemonConfigurator;

const PokemonConfiguratorBlock = styled.div`
  display: block;
  background-color: blue;
  width: 100%;
  height: 100%;
`;
