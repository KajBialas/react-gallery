import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './home/home.container';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
