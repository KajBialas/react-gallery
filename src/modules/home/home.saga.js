import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { HomeTypes, HomeActions } from './home.redux';

export function* dataRequest() {
  try {
    const apiData = {
      records: [],
    };

    yield axios.get(`http://shibe.online/api/shibes?count=16`)
      .then(res => {
        apiData.records = res;
      });

    console.log(apiData.records.data);

    yield put(HomeActions.dataRequestSuccess(apiData.records.data));
  } catch (e) {
    yield put(HomeActions.dataRequestFailure(e));
  }
}

export default function* homeSaga() {
  yield takeLatest(HomeTypes.DATA_REQUEST, dataRequest);
}