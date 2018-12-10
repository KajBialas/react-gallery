import { combineReducers } from 'redux-immutable';

import { reducer as home } from './home/home.redux';
import { reducer as favourites } from './favourites/favourites.redux';

export default function createReducer() {
  return combineReducers({
    home,
    favourites,
  });
}