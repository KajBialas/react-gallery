import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { Record, fromJS, List } from 'immutable';
import axios from 'axios';

import { HomeActions, HomeTypes } from '../home.redux';
import homeSaga from '../home.saga';

jest.mock('axios');
jest.setTimeout(30000);

describe('Home: saga', () => {
  const HomeRecord = new Record({
    photos: fromJS({
      isLoading: false,
      isError: false,
      records: List(),
    })
  });

  const getSagaTester = ({home = new HomeRecord()}) => {
    const sagaTester = new SagaTester({
      initialState: {
        home,
      },
    });

    sagaTester.start(homeSaga);
    return sagaTester;
  };

  it('should fetch records and dispatch successful action', async () => {
    const sagaTester = getSagaTester({});

    axios.get.mockImplementation(() => Promise.resolve(
      ['1.jpg', '2.jpg'],
    ));

    sagaTester.dispatch(HomeActions.dataRequest(''));

    const action = await sagaTester.waitFor(HomeTypes.DATA_REQUEST_SUCCESS);

    expect(sagaTester.getCalledActions()).to.contains(action);
  });

  it('should fetch records and dispatch failure action', async () => {
    const sagaTester = getSagaTester({});

    axios.get.mockImplementation(() => {
      throw new Error('Test error');
    });

    sagaTester.dispatch(HomeActions.dataRequest(''));

    const action = await sagaTester.waitFor(HomeTypes.DATA_REQUEST_FAILURE);

    expect(sagaTester.getCalledActions()).to.contains(action);
  });
});