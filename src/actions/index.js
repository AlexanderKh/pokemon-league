import { Pokedex } from 'pokeapi-js-wrapper';

import { pokemonNameToDisplayName, mapPokemonAPIDataToLocalFormat } from '../utils';
import { getIsSelectedLookupPokemonInLineup, getLineupIsFull } from '../selectors';

const P = new Pokedex();

export const populateLookupIndex = () => async (dispatch) => {
  const { results } = await P.getPokemonsList();
  const pokemonLookupIndex = results.map((result) => {
    return {
      displayName: pokemonNameToDisplayName(result.name),
      name: result.name,
    }
  });

  dispatch({
    type: 'POPULATE_LOOKUP_INDEX',
    data: pokemonLookupIndex,
  });
};

export const loadAndSelectLookupPokemon = (pokemonName) => async (dispatch) => {
  if (!pokemonName) {
    return dispatch({
      type: 'SELECT_LOOKUP_POKEMON',
      data: null,
    })
  }

  dispatch({
    type: 'START_LOADING_POKEMON',
  });

  const pokemonData = await P.getPokemonByName(pokemonName);

  dispatch({
    type: 'SELECT_LOOKUP_POKEMON',
    data: mapPokemonAPIDataToLocalFormat(pokemonData),
  });
};

export const addCurrentLookupPokemonToLineup = () => (dispatch, getState) => {
  const state = getState();
  const { selectedLookupPokemon } = state;
  const lineupIsFull = getLineupIsFull(state);
  const isSelectedLookupPokemonInLineup = getIsSelectedLookupPokemonInLineup(state);

  if (selectedLookupPokemon && !lineupIsFull && !isSelectedLookupPokemonInLineup) {
    dispatch({
      type: 'ADD_POKEMON',
      data: selectedLookupPokemon,
    });
  }
};

export const selectPokemon = (pokemon) => (dispatch) => {
  dispatch({
    type: 'SELECT_POKEMON',
    data: pokemon,
  })
};

export const removePokemon = (pokemon) => (dispatch) => {
  dispatch({
    type: 'REMOVE_POKEMON',
    data: pokemon,
  })
};

export const updatePokemon = (pokemon) => (dispatch) => {
  dispatch({
    type: 'UPDATE_POKEMON',
    data: pokemon,
  })
};
