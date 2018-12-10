import { expect } from 'chai';
import { fromJS, Record } from 'immutable';

import {
  selectRecords,
  selectLoadingStatus,
  selectErrorStatus,
} from '../home.selector';

describe('Home: selectors', () => {
  const HomeRecord = new Record({
      photos: fromJS({
        isLoading: false,
        isError: false,
        records: [],
      })
  });

  const initialState = new fromJS({
    home: HomeRecord(),
  });

  describe('selectRecords', () => {
    const items = ['1.jpg', '2.jpg'];

    const state = initialState.setIn(['home', 'photos', 'records'], items);

    it('should select records', () => {
      expect(selectRecords(state)).to.deep.equal(items);
    });
  });

  describe('selectLoadingStatus', () => {
    it('should select success status true', () => {
      const state = initialState.setIn(['home', 'photos', 'isLoading'], true);

      expect(selectLoadingStatus(state)).to.deep.equal(true);
    });

    it('should select success status false', () => {
      const state = initialState.setIn(['home', 'photos', 'isLoading'], false);

      expect(selectLoadingStatus(state)).to.deep.equal(false);
    });
  });

  describe('selectErrorStatus', () => {
    it('should select success status true', () => {
      const state = initialState.setIn(['home', 'photos', 'isError'], true);

      expect(selectErrorStatus(state)).to.deep.equal(true);
    });

    it('should select success status false', () => {
      const state = initialState.setIn(['home', 'photos', 'isError'], false);

      expect(selectErrorStatus(state)).to.deep.equal(false);
    });
  });

});