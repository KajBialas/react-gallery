import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, List } from 'immutable';
import { selectRecords } from "./home.selector";

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  dataInit: [''],
  dataRequest: [''],
  dataRequestSuccess: ['data'],
  dataRequestFailure: [''],
}, { prefix: 'HOME_' });

const HomeRecord = new Record({
  photos: fromJS({
    isLoading: false,
    isError: false,
    records: [''],
  })
});

export const INITIAL_STATE = new HomeRecord({});

const dataInit = (state = INITIAL_STATE) => state
  .setIn(['photos', 'isLoading'], false)
  .setIn(['photos', 'isError'], false)
  .setIn(['photos', 'records'], []);


const dataRequest = state => state
  .setIn(['photos', 'isLoading'], true)
  .setIn(['photos', 'isError'], false);

const getCurrentRecords = state => state.getIn(['photos', 'records']);

const dataRequestSuccess = (state,  { data } ) => {
  const records = getCurrentRecords(state).concat(data);

  return state
  .setIn(['photos', 'isLoading'], false)
  .setIn(['photos', 'isError'], false)
  .setIn(['photos', 'records'], records)};

const dataRequestFailure = state => state
  .setIn(['photos', 'isLoading'], false)
  .setIn(['photos', 'isError'], true)
  .setIn(['photos', 'records'], []);

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.DATA_INIT]: dataInit,
  [HomeTypes.DATA_REQUEST]: dataRequest,
  [HomeTypes.DATA_REQUEST_SUCCESS]: dataRequestSuccess,
  [HomeTypes.DATA_REQUEST_FAILURE]: dataRequestFailure,
});
