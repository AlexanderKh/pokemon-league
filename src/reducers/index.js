import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'

const defaultState = {
  pokemonsLineup: [],
  selectedPokemon: null,

  pokemonLookupIndex: [],
  pokemonLookupIndexLoaded: false,

  selectedLookupPokemon: null,
  selectedLookupPokemonLoaded: true,
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POPULATE_LOOKUP_INDEX':
      return {
        ...state,
        pokemonLookupIndex: action.data,
        pokemonLookupIndexLoaded: true,
      };
    case 'START_LOADING_POKEMON':
      return {
        ...state,
        selectedLookupPokemonLoaded: false,
      };
    case 'SELECT_LOOKUP_POKEMON':
      return {
        ...state,
        selectedLookupPokemon: action.data,
        selectedLookupPokemonLoaded: true,
      };
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemonsLineup: [...state.pokemonsLineup, action.data],
      };
    case 'SELECT_POKEMON':
      return {
        ...state,
        selectedPokemon: action.data,
      };
    case 'REMOVE_POKEMON':
      const newState = {
        ...state,
        pokemonsLineup: state.pokemonsLineup.filter((lineupPokemon) => lineupPokemon.name !== action.data.name)
      };
      if (get(state, 'selectedPokemon.name') === get(action.data, 'name')) {
        newState.selectedPokemon = null;
      }

      return newState;
    case 'UPDATE_POKEMON':
      const newPokemonsLineup = cloneDeep(state.pokemonsLineup);
      const newLineupPokemon = newPokemonsLineup.find((lineupPokemon) => lineupPokemon.name === action.data.name);
      Object.assign(newLineupPokemon, action.data);

      return {
        ...state,
        pokemonsLineup: newPokemonsLineup,
        selectedPokemon: newLineupPokemon,
      };
    default:
      return state
  }
};

export default rootReducer;
