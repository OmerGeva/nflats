import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import cartReducer from './cart/cart.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
  stateReconciler: hardSet
}

const allReducers = combineReducers({
  cart: cartReducer
});


const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default persistReducer(persistConfig, rootReducer);
