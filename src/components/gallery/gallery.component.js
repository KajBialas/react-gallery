import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

// Styles
import {
  StyledGalleryMainWrapper,
  StyledGalleryWrapper,
  StyledGalleryImage,
  StyledGalleryItem,
  StyledDescription,
} from "./gallery.style.js";

class GalleryComponent extends PureComponent {
  propTypes = {
    photosRecords: PropTypes.array.isRequired,
    handleImagesLoaded: PropTypes.func.isRequired,
  };

  static defaultProps = {
    photosRecords: [],
  };

  renderGalleryItem = () => this.props.photosRecords.map((element) =>
      <StyledGalleryItem key={element}>
        <StyledGalleryImage src={element} />
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