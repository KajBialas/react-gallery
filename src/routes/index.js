import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './home/home.container';
import Cart from './cart/cart.container';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
