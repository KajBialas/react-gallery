import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './home/home.container';
import Contact from './contact/contact.component';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
