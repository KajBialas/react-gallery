import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, List } from 'immutable';

export const { Types: FavouritesTypes, Creators: FavouritesActions } = createActions({
  addFavourite: ['data'],
  removeFavourite: ['data'],
}, { prefix: 'FAVOURITE_' });

const FavouriteRecord = new Record({
  favourites: fromJS({
    records: List(),
  })
});

export const INITIAL_STATE = new FavouriteRecord({});

const getCurrentRecords = state => state.getIn(['favourites', 'records']);

const addFavourite = (state,  { data } ) => {
  const records = getCurrentRecords(state).push(data);

  return state
    .setIn(['favourites', 'records'], records)};

const removeFavourite = (state,  { data } ) => {
  const records = getCurrentRecords(state);
  const filteredRecords = records.filter(e => e !== data)

  return state
    .setIn(['favourites', 'records'], filteredRecords)};


export const reducer = createReducer(INITIAL_STATE, {
  [FavouritesTypes.ADD_FAVOURITE]: addFavourite,
  [FavouritesTypes.REMOVE_FAVOURITE]: removeFavourite,
});
