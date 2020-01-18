import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionLabel } from './common';
import { connect } from 'react-redux';
import PokemonLineupItem from './PokemonLineupItem';

class PokemonLineup extends Component {
  render() {
    const pokemonsLineupJSX = this.props.pokemonsLineup.map((pokemon) => {
      return <PokemonLineupItem key={`lineup-${pokemon.name}`} pokemon={pokemon}/>
    });

    return <PokemonLineupBlock name='PokemonLineup'>
      <SectionLabel>Pokemon Lineup</SectionLabel>
      <Lineup>
        {pokemonsLineupJSX}
      </Lineup>
    </PokemonLineupBlock>
  }
}

const mapStateToProps = (state) => ({
  pokemonsLineup: state.pokemonsLineup,
});

export default connect(mapStateToProps)(PokemonLineup);

const PokemonLineupBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Lineup = styled.div`
  height: calc(100% - 30px);
  
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
`;
