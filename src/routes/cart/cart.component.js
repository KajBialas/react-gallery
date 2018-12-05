import React, { PureComponent, Fragment } from 'react';

// Components
import Header from 'components/header/header.component';

class CartComponent extends PureComponent {
  componentDidMount(){
    console.log(this.props);
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        Cart
      </Fragment>
    );
  }
}

export default CartComponent;
