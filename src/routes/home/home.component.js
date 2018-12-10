import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

// Components
import Header from 'components/header/header.component';
import Gallery from 'components/gallery/gallery.component';

// Styles
import { StyledDescription } from './home.style';
import { Wrapper } from 'styledElements';


class HomeComponent extends PureComponent {
  static propTypes = {
    photosRecords: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    photosLoading: PropTypes.bool.isRequired,
    photosError: PropTypes.bool.isRequired,
    photosInit: PropTypes.func.isRequired,
    photosRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    photosRecords: [],
  };

  state = {
    imagesLoaded: false,
  };

  componentDidMount(){
    this.props.photosInit();
    this.props.photosRequest();

    console.log(this.props);
  }

  handleImagesLoaded = () => this.setState({ imagesLoaded: true });

  render() {
    const { photosRecords, photosRequest } = this.props;
    const { imagesLoaded } = this.state;
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <StyledDescription>
            This is react example gallery.
          </StyledDescription>
          {photosRecords.length ?
          <InfiniteScroll
            pageStart={0}
            loadMore={photosRequest}
            hasMore={imagesLoaded}>
              <Gallery photosRecords={photosRecords} handleImagesLoaded={this.handleImagesLoaded} />
          </InfiniteScroll> : null }
        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
