import React, { Component } from 'react';
import styled from 'styled-components';

class PokedexArea extends Component {
  render() {
    return <PokedexAreaBlock/>
  }
}

export default PokedexArea;

const PokedexAreaBlock = styled.div`
  display: block;
  background-color: red;
  width: 100%;
  height: 100%;
`;
