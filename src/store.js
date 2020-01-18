import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers';

const persistConfig = {
  key: 'pokemon-league',
  storage,
  whitelist: [
    'pokemonsLineup',
    'pokemonLookupIndex',
    'pokemonLookupIndexLoaded',
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
