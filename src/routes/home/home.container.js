import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomeComponent from './home.component'

import { HomeActions } from 'modules/home/home.redux';

import {
  selectRecords,
  selectLoadingStatus,
  selectErrorStatus,
} from 'modules/home/home.selector';

const mapStateToProps = createStructuredSelector({
  photosRecords: selectRecords,
  photosLoading: selectLoadingStatus,
  photosError: selectErrorStatus
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  photosInit: HomeActions.dataInit,
  photosRequest: HomeActions.dataRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
