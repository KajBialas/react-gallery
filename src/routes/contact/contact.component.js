import React, { PureComponent, Fragment } from 'react';

// Components
import Header from 'components/header/header.component';

// Styles
import { StyledDescription } from './contact.style';
import { Wrapper } from 'styledElements';


class ContactComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <StyledDescription>
            My email: <span>kaj.bialas@gmail.com</span>
          </StyledDescription>
        </Wrapper>
      </Fragment>
    );
  }
}

export default ContactComponent;
