import { createActions, createReducer } from 'reduxsauce';
import {Record, fromJS, Map} from 'immutable';

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  albumsRequest: [''],
  albumsRequestSuccess: [''],
  albumsRequestFailure: [''],
}, { prefix: 'HOME_' });

const HomeRecord = new Record({
  albums: fromJS({
    isLoading: false,
    isError: false,
    records: Map(),
  })
});

export const INITIAL_STATE = new HomeRecord({});

const albumsRequest = (state = INITIAL_STATE) => state
  .setIn(['albums', 'isLoading'], true)
  .setIn(['albums', 'isError'], false)
  .setIn(['albums', 'records'], []);


const albumsRequestSuccess = (state = INITIAL_STATE,  records ) => {
  console.log('albums reducer', records, fromJS(records));
  return state
  .setIn(['albums', 'isLoading'], true)
  .setIn(['albums', 'isError'], false)
  .setIn(['albums', 'records'], fromJS(records[''].records))};

const albumsRequestFailure = (state = INITIAL_STATE) => state
  .setIn(['albums', 'isLoading'], false)
  .setIn(['albums', 'isError'], true)
  .setIn(['albums', 'records'], []);

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.ALBUMS_REQUEST]: albumsRequest,
  [HomeTypes.ALBUMS_REQUEST_SUCCESS]: albumsRequestSuccess,
  [HomeTypes.ALBUMS_REQUEST_FAILURE]: albumsRequestFailure,
});
