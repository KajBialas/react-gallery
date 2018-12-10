import { expect } from 'chai';
import { fromJS, List, Record } from 'immutable';

import {
  selectFavourites,
} from '../favourites.selector';

describe('Favourites: selectors', () => {
  const FavouritesRecord = new Record({
    favourites: fromJS({
      records: List(),
    })
  });

  const initialState = new fromJS({
    favourites: FavouritesRecord(),
  });

  describe('selectFavourites', () => {
    const state = initialState.setIn(['favourites', 'favourites', 'records'], List());

    it('should select records', () => {
      expect(selectFavourites(state)).to.deep.equal([]);
    });
  });
});