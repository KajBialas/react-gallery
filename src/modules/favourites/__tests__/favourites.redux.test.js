import { expect } from 'chai';
import { Record, fromJS, List } from 'immutable';

import { reducer, FavouritesActions } from '../favourites.redux';

describe('Favourite Redux', () => {
  const FavouriteRecord = new Record({
    favourites: fromJS({
      records: [],
    })
  });

  const state = new FavouriteRecord();

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    describe('if records was empty', () => {
      it('should set data on ADD_FAVOURITE', () => {
        const data = '1.jpg';

        const expectedState = new FavouriteRecord()
          .setIn(['favourites', 'records'], [data]);

        expect(reducer(state, FavouritesActions.addFavourite(data)).toJS())
          .to.deep.equal(expectedState.toJS());
      });
    });

    describe('if records has data', () => {
      const existData = ['1.jpg', '2.jpg', '3.jpg'];



      const FavouriteRecord = new Record({
        favourites: fromJS({
          records: existData,
        })
      });

      const state = new FavouriteRecord();

      it('should set data on ADD_FAVOURITE', () => {
        const data = '4.jpg';
        const expectedData = ['1.jpg', '2.jpg','3.jpg', '4.jpg'];

        const expectedState = new FavouriteRecord()
          .setIn(['favourites', 'records'], expectedData);

        expect(reducer(state, FavouritesActions.addFavourite(data)).toJS())
          .to.deep.equal(expectedState.toJS());
      });

      it('should remove data on REMOVE_FAVOURITE', () => {
        const data = '3.jpg';
        const expectedData = ['1.jpg', '2.jpg'];

        const expectedState = new FavouriteRecord()
          .setIn(['favourites', 'records'], expectedData);

        expect(reducer(state, FavouritesActions.removeFavourite(data)).toJS())
          .to.deep.equal(expectedState.toJS());
      });
    });
  });
});
