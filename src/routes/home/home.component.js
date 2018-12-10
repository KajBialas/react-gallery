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
    favouritesRecords: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    photosLoading: PropTypes.bool.isRequired,
    photosError: PropTypes.bool.isRequired,
    photosInit: PropTypes.func.isRequired,
    photosRequest: PropTypes.func.isRequired,
    addFavourite: PropTypes.func.isRequired,
    removeFavourite: PropTypes.func.isRequired,
  };

  static defaultProps = {
    photosRecords: [],
    favouritesRecords: [],
  };

  state = {
    imagesLoaded: false,
  };

  componentDidMount(){
    this.props.photosInit();
    this.props.photosRequest();
  }

  handleImagesLoaded = () => this.setState({ imagesLoaded: true });

  render() {
    const { photosRecords, photosRequest, favouritesRecords, addFavourite, removeFavourite } = this.props;
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
              <Gallery
                photosRecords={photosRecords}
                handleImagesLoaded={this.handleImagesLoaded}
                favouritesRecords={favouritesRecords}
                addFavourite={addFavourite}
                removeFavourite={removeFavourite}
              />
          </InfiniteScroll> : null }
        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
