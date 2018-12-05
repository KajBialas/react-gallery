import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomeComponent from './home.component'

import { HomeActions } from 'modules/home/home.redux';

import {
  selectAlbumsRecords,
  selectLoadingStatus,
  selectErrorStatus,
} from 'modules/home/home.selector';

const mapStateToProps = createStructuredSelector({
  albumsRecords: selectAlbumsRecords,
  albumsLoading: selectLoadingStatus,
  albumsError: selectErrorStatus
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  albumsRequest: HomeActions.albumsRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
