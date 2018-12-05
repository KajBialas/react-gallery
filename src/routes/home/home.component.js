import React, { PureComponent, Fragment } from 'react';

// Components
import Header from 'components/header/header.component';

// Styles
import { Description, TaskLink } from './home.style';
import { Wrapper } from 'styledElements';

// Icons
import ArrowIcon from 'icons/arrow.icon';
import IssueIcon from 'icons/issue.icon';

class HomeComponent extends PureComponent {
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
        <Wrapper>
          <Description>
            This is react example gallery.
          </Description>
          <TaskLink to="/cart">
            <ArrowIcon/> Go to main part issue
          </TaskLink>
        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
