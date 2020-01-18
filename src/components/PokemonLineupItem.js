import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { removePokemon, selectPokemon } from '../actions';

class PokemonLineupItem extends Component {
  onSelectPokemonClick = (event) => {
    this.props.selectPokemon(this.props.pokemon);

    event.stopPropagation();
  };

  onRemovePokemonClick = (event) => {
    this.props.removePokemon(this.props.pokemon);

    event.stopPropagation();
  };

  render() {
    const { pokemon, selectedPokemon } = this.props;

    return <LineupItem
      selected={selectedPokemon && pokemon.name === selectedPokemon.name}
      onClick={this.onSelectPokemonClick}
    >
      <PokemonSprite src={pokemon.sprite}/>
      <PokemonName>{pokemon.displayName}</PokemonName>
      <RemovePokemonButton onClick={this.onRemovePokemonClick}/>
    </LineupItem>
  }
}

const mapStateToProps = (state) => ({
  selectedPokemon: state.selectedPokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectPokemon,
      removePokemon,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLineupItem);

const LineupItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  
  height: 80px;
  width: 100px;
  
  background-color: ${(props) => props.selected ? 'lightgray' : 'none'};
  border: 1px dashed lightgray;
  border-radius: 2px;
  
 cursor: ${(props) => props.selected ? 'default' : 'pointer'};;
  
  position: relative;
`;

const PokemonSprite = styled.img`
  height: 60px;
`;

const PokemonName = styled.div`
  font-size: 12px;
  line-height: 12px;
  padding: 2px;
`;

const RemovePokemonButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  
  background-color: darkgray;
  color: white;
  
  width: 16px;
  height: 16px;
  border-radius: 10px;
  
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  &::after {
    content: '✕';
  }
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
