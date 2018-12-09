import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Image from 'components/image/image.component';
import ImageLoader from 'react-load-image';
import InfiniteScroll from 'react-infinite-scroller';
// Components
import Header from 'components/header/header.component';

// Styles
import { Description, TempGallery, TaskLink, GalleryMainWrapper, GalleryWrapper, GalleryImage, GalleryItem } from './home.style';
import { Wrapper } from 'styledElements';
import { Grid, Row } from 'react-bootstrap';

// Icons
import ArrowIcon from 'icons/arrow.icon';
import IssueIcon from 'icons/issue.icon';





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

  handleImagesLoaded = (imagesLoadedInstance) => this.setState((prevState) => {
    return {imagesLoaded: true};
});

  render() {
    const childElements = this.props.photosRecords.map(function(element){
      return (
        <GalleryItem>
          <GalleryImage src={element} />
        </GalleryItem>
      );
    });

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
              <GalleryMainWrapper>
                <GalleryWrapper
                  onImagesLoaded={this.handleImagesLoaded}
                  disableImagesLoaded={this.state.imagesLoaded} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                  {childElements}
                </GalleryWrapper>
              </GalleryMainWrapper>
          </InfiniteScroll> : null }




        </Wrapper>
      </Fragment>
    );
  }
}

export default HomeComponent;
