import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import FavouritesComponent from './favourites.component'

import { FavouritesActions } from 'modules/favourites/favourites.redux';

import {
  selectFavourites,
} from 'modules/favourites/favourites.selector';

const mapStateToProps = createStructuredSelector({
  favouritesRecords: selectFavourites,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  addFavourite: FavouritesActions.addFavourite,
  removeFavourite: FavouritesActions.removeFavourite,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesComponent);
