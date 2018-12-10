import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomeComponent from './home.component'

import { HomeActions } from 'modules/home/home.redux';
import { FavouritesActions } from 'modules/favourites/favourites.redux';

import {
  selectRecords,
  selectLoadingStatus,
  selectErrorStatus,
} from 'modules/home/home.selector';

import {
  selectFavourites,
} from 'modules/favourites/favourites.selector';

const mapStateToProps = createStructuredSelector({
  photosRecords: selectRecords,
  photosLoading: selectLoadingStatus,
  photosError: selectErrorStatus,
  favouritesRecords: selectFavourites,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  photosInit: HomeActions.dataInit,
  photosRequest: HomeActions.dataRequest,
  addFavourite: FavouritesActions.addFavourite,
  removeFavourite: FavouritesActions.removeFavourite,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
