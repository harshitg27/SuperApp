// store.js
import { combineReducers, createStore } from 'redux';
import userReducer from '../reducer/user'
import genreReducer from '../reducer/genre';

const initialState = {
  count: 0
};

const reducer = combineReducers({
  userReducer ,
  genreReducer
})

const store = createStore(reducer);

export default store;
