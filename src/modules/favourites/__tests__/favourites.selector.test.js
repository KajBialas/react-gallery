import { expect } from 'chai';
import { fromJS, Record } from 'immutable';

import {
  selectFavourites,
} from '../favourites.selector';

describe('Favourites: selectors', () => {
  const FavouritesRecord = new Record({
    favourites: fromJS({
      records: [],
    })
  });

  const initialState = new fromJS({
    favourites: FavouritesRecord(),
  });

  describe('selectFavourites', () => {
    const items = ['1.jpg', '2.jpg'];

    const state = initialState.setIn(['favourites', 'favourites', 'records'], items);

    it('should select records', () => {
      expect(selectFavourites(state)).to.deep.equal(items);
    });
  });
});