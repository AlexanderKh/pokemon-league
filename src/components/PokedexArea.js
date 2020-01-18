import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Select from 'react-select'

import { SectionLabel } from './common';
import { addCurrentLookupPokemonToLineup, loadAndSelectLookupPokemon, populateLookupIndex } from '../actions';
import PokedexPokemonInformation from './PokedexPokemonInformation';
import Spinner from './spinner/Spinner';

class PokedexArea extends Component {
  state = {
    showPokemonsLookupList: false,
  };

  async componentDidMount() {
    await this.props.populateLookupIndex();
  }

  onPokemonSelection = (selectedOption) => {
    this.props.loadAndSelectLookupPokemon(selectedOption && selectedOption.value)
  };

  onPokemonLookupInputChange = (value) => {
    this.setState({ showPokemonsLookupList: value.length >= 1 });
  };

  renderContent() {
    const {
      pokemonLookupIndex,
    } = this.props;

    const options = pokemonLookupIndex.map((pokemonLookupEntry) => {
      return {
        value: pokemonLookupEntry.name,
        label: pokemonLookupEntry.displayName,
      }
    });

    return <React.Fragment>
      <SectionLabel>Search Pokedex</SectionLabel>

      <PokemonLookupWrapper>
        <Select
          isClearable={true}
          onChange={this.onPokemonSelection}
          options={options}
          menuIsOpen={this.state.showPokemonsLookupList}
          onInputChange={this.onPokemonLookupInputChange}
        />
      </PokemonLookupWrapper>

      <PokedexPokemonInformation/>
    </React.Fragment>

  }

  render() {
    const { pokemonLookupIndexLoaded } = this.props;

    return <PokedexAreaBlock name='PokedexArea'>
      {pokemonLookupIndexLoaded ? this.renderContent() : <Spinner/> }
    </PokedexAreaBlock>;
  }
}


const mapStateToProps = (state) => ({
  pokemonLookupIndex: state.pokemonLookupIndex,
  pokemonLookupIndexLoaded: state.pokemonLookupIndexLoaded,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      populateLookupIndex,
      loadAndSelectLookupPokemon,
      addCurrentLookupPokemonToLineup,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokedexArea);

const PokedexAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const PokemonLookupWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
`;
