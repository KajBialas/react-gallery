import { combineReducers } from 'redux-immutable';

import { reducer as home } from './home/home.redux';

export default function createReducer() {
  return combineReducers({
    home,
  });
}