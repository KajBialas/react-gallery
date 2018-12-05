import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { HomeTypes, HomeActions } from './home.redux';

export function* albumsRequest() {
  try {
    const albums = {records: []};
    yield axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {
        console.log('persons', albums, res.data)
        albums.records = res.data;
        console.log('persons', albums, res.data)
      });
    yield put(HomeActions.albumsRequestSuccess(albums));
  } catch (e) {
    yield put(HomeActions.albumsRequestFailure(e));
  }
}

export default function* homeSaga() {
  yield takeLatest(HomeTypes.ALBUMS_REQUEST, albumsRequest);
}