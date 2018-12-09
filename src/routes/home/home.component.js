import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

// Components
import Header from 'components/header/header.component';
import Gallery from 'components/gallery/gallery.component';

// Styles
import { Description } from './home.style';
import { Wrapper } from 'styledElements';


class HomeComponent extends PureComponent {
  static defaultProps = {
    photosRecords: [],
  };

  state = {
    imagesLoaded: false,
    imagesSet: [],
  };

  componentDidMount(){
    this.props.photosInit();
    this.props.photosRequest();
  }

  handleImagesLoaded = () => this.setState({ imagesLoaded: true });

  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Description>
            This is react example gallery.
          </Description>
          {!this.props.isLoading && this.props.photosRecords.length ?
          <InfiniteScroll
            pageStart={0}
            loadMore={this.props.photosRequest}
            hasMore={this.state.imagesLoaded}>
              <Gallery photosRecords={this.props.photosRecords} handleImagesLoaded={this.handleImagesLoaded} />
          </InfiniteScroll> : null }
        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
