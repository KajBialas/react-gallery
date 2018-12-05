import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import CartComponent from './cart.component'

import { HomeActions } from 'modules/home/home.redux';

import {
} from 'modules/cart/cart.selector';

const mapStateToProps = createStructuredSelector({
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
