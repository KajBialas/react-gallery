import { createSelector } from 'reselect';

const selectHomeDomain = state => state.get('home');

export const selectRecords = createSelector(
  selectHomeDomain,
  state => state.getIn(['photos', 'records']),
);

export const selectLoadingStatus = createSelector(
  selectHomeDomain,
  state => state.getIn(['photos', 'isLoading']),
);

export const selectErrorStatus = createSelector(
  selectHomeDomain,
  state => state.getIn(['photos', 'isError']),
);