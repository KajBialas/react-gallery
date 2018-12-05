import { createSelector } from 'reselect';

const selectHomeDomain = state => state.get('home');

export const selectAlbumsRecords = createSelector(
  selectHomeDomain,
  state => state.getIn(['albums', 'records']),
);

export const selectLoadingStatus = createSelector(
  selectHomeDomain,
  state => state.getIn(['albums', 'isLoading']),
);

export const selectErrorStatus = createSelector(
  selectHomeDomain,
  state => state.getIn(['albums', 'isError']),
);