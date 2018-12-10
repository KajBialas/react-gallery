import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './home/home.container';
import Contact from './contact/contact.component';
import Favourites from './favourites/favourites.container';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
