import { expect } from 'chai';
import { Record, fromJS } from 'immutable';

import { reducer, HomeActions } from '../home.redux';

describe('Home Redux', () => {
  const HomeRecord = new Record({
    photos: fromJS({
      isLoading: false,
      isError: false,
      records: [],
    })
  });

  const state = new HomeRecord();

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should set INITIAL_STATE on DATA_INIT', () => {
      const expectedState = new HomeRecord();

      expect(reducer(state, HomeActions.dataInit()).toJS())
        .to.deep.equal(expectedState.toJS());
    });

    it('should set data on DATA_REQUEST', () => {
      const expectedState = new HomeRecord()
        .setIn(['photos', 'isLoading'], true);

      expect(reducer(state, HomeActions.dataRequest()).toJS())
        .to.deep.equal(expectedState.toJS());
    });

    describe('if records was empty', () => {
      it('should set data on DATA_REQUEST_SUCCESS', () => {
        const data = ['1.jpg', '2.jpg'];

        const expectedState = new HomeRecord()
          .setIn(['photos', 'isLoading'], false)
          .setIn(['photos', 'records'], data);

        expect(reducer(state, HomeActions.dataRequestSuccess(data)).toJS())
          .to.deep.equal(expectedState.toJS());
      });

      it('should set data on DATA_REQUEST_FAILURE', () => {

        const expectedState = new HomeRecord()
          .setIn(['photos', 'isLoading'], false)
          .setIn(['photos', 'isError'], true)
          .setIn(['photos', 'records'], []);

        expect(reducer(state, HomeActions.dataRequestFailure()).toJS())
          .to.deep.equal(expectedState.toJS());
      });
    });

    describe('if records has data', () => {
      const existData = ['1.jpg', '2.jpg'];
      const data = ['3.jpg', '4.jpg'];
      const expectedData = ['1.jpg', '2.jpg','3.jpg', '4.jpg'];

      const HomeRecord = new Record({
        photos: fromJS({
          isLoading: false,
          isError: false,
          records: existData,
        })
      });

      const state = new HomeRecord();

      it('should set data on DATA_REQUEST_SUCCESS', () => {
        const expectedState = new HomeRecord()
          .setIn(['photos', 'isLoading'], false)
          .setIn(['photos', 'records'], expectedData);

        expect(reducer(state, HomeActions.dataRequestSuccess(data)).toJS())
          .to.deep.equal(expectedState.toJS());
      });

      it('should set data on DATA_REQUEST_FAILURE', () => {

        const expectedState = new HomeRecord()
          .setIn(['photos', 'isLoading'], false)
          .setIn(['photos', 'isError'], true)
          .setIn(['photos', 'records'], existData);

        expect(reducer(state, HomeActions.dataRequestFailure()).toJS())
          .to.deep.equal(expectedState.toJS());
      });
    });
  });
});
