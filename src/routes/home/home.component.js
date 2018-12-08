import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';
// Components
import Header from 'components/header/header.component';

// Styles
import { Description, TaskLink, GalleryMainWrapper, GalleryWrapper, GalleryImage, GalleryItem } from './home.style';
import { Wrapper } from 'styledElements';
import { Grid, Row } from 'react-bootstrap';

// Icons
import ArrowIcon from 'icons/arrow.icon';
import IssueIcon from 'icons/issue.icon';


const masonryOptions = {
  transitionDuration: 0
};


class HomeComponent extends PureComponent {
  static defaultProps = {
    photosRecords: [],
  };

  state = {
    imagesLoaded: false,
  };

  componentDidMount(){
    console.log(this.props);
    this.props.photosRequest();
  }

  handleImagesLoaded = () => this.setState((prevState) => {
  return {imagesLoaded: !prevState.imagesLoaded};
});

  render() {
    const childElements = this.props.photosRecords.map(function(element){
      return (
        <GalleryItem>
          <GalleryImage  src={element} />
        </GalleryItem>
      );
    });

    const style = {
      maxWidth:'25%',
      display: 'inline-block',
    };

    const loader = <div className="loader">Loading ...</div>;

    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Description>
            This is react example gallery.
          </Description>

          {/*{this.props.photosRecords.map((item) => <img src={item} />)}*/}

          {!this.props.isLoading && this.props.photosRecords.length ?
          <InfiniteScroll
            pageStart={0}
            loadMore={() => console.log('more')}
            hasMore={this.state.imagesLoaded}
            loader={loader}>
              <GalleryMainWrapper>
                <GalleryWrapper
                  onImagesLoaded={this.handleImagesLoaded}
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
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
