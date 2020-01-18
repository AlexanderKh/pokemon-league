import { MAX_POKEMONS } from '../constants';

export const getIsSelectedLookupPokemonInLineup = (state) => {
  const { pokemonsLineup, selectedLookupPokemon } = state;

  return selectedLookupPokemon
    ? pokemonsLineup.find((lineupPokemon) => selectedLookupPokemon.name === lineupPokemon.name)
    : false;
};

export const getLineupIsFull = (state) => {
  return state.pokemonsLineup.length >= MAX_POKEMONS;
};
