import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, List } from 'immutable';

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  dataRequest: [''],
  dataRequestSuccess: ['data'],
  dataRequestFailure: [''],
}, { prefix: 'HOME_' });

const HomeRecord = new Record({
  photos: fromJS({
    isLoading: false,
    isError: false,
    records: List(),
  })
});

export const INITIAL_STATE = new HomeRecord({});

const dataRequest = (state = INITIAL_STATE) => state
  .setIn(['photos', 'isLoading'], true)
  .setIn(['photos', 'isError'], false)
  .setIn(['photos', 'records'], []);


const dataRequestSuccess = (state = INITIAL_STATE,  { data } ) => {
  return state
  .setIn(['photos', 'isLoading'], false)
  .setIn(['photos', 'isError'], false)
  .setIn(['photos', 'records'], data)};

const dataRequestFailure = (state = INITIAL_STATE) => state
  .setIn(['photos', 'isLoading'], false)
  .setIn(['photos', 'isError'], true)
  .setIn(['photos', 'records'], []);

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.DATA_REQUEST]: dataRequest,
  [HomeTypes.DATA_REQUEST_SUCCESS]: dataRequestSuccess,
  [HomeTypes.DATA_REQUEST_FAILURE]: dataRequestFailure,
});
