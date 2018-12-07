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
    this.props.photosRequest();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Description>
            This is react example gallery.
          </Description>

          {this.props.photosRecords.map((item) => <img src={item} />)}

        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
