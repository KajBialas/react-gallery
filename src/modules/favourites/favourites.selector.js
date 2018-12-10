import { createSelector } from 'reselect';

const selectFavouriteDomain = state => state.get('favourites');

export const selectFavourites = createSelector(
  selectFavouriteDomain,
  state => state.getIn(['favourites', 'records']),
);