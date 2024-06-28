import { createStore, combineReducers } from 'redux';
import productReducer from '../../Redux/Reducer/reducer.js'

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer);

export default store;