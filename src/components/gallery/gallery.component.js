import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// Styles
import {
  StyledGalleryMainWrapper,
  StyledGalleryWrapper,
  StyledGalleryImage,
  StyledGalleryItem,
  StyledDescription,
  StyledGalleryItemOverlay,
} from "./gallery.style.js";

// Icons
import HeartIcon from 'icons/heart.icon';

class GalleryComponent extends PureComponent {
  static propTypes = {
    photosRecords: PropTypes.array.isRequired,
    handleImagesLoaded: PropTypes.func.isRequired,
  };

  static defaultProps = {
    photosRecords: [],
    handleImagesLoaded: () => {},
  };

  renderGalleryItem = () => this.props.photosRecords.map((element, index) =>
      <StyledGalleryItem key={element + index}>
        <StyledGalleryImage src={element}>
        </StyledGalleryImage>
        <StyledGalleryItemOverlay>
          <HeartIcon />
        </StyledGalleryItemOverlay>
      </StyledGalleryItem>
    );

  renderGallery = () => (
    <StyledGalleryMainWrapper>
      <StyledGalleryWrapper onImagesLoaded={this.props.handleImagesLoaded}>
        {this.renderGalleryItem()}
      </StyledGalleryWrapper>
    </StyledGalleryMainWrapper>
  );

  renderEmptyInfo = () => <StyledDescription>No result</StyledDescription>;

  render() {
    return this.props.photosRecords.length ? this.renderGallery() : this.renderEmptyInfo();
  }
}

export default GalleryComponent;