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
  StyledIcon,
} from "./gallery.style.js";

// Icons
import HeartIcon from 'icons/heart.icon';

class GalleryComponent extends PureComponent {
  static propTypes = {
    photosRecords: PropTypes.array.isRequired,
    favouritesRecords: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    handleImagesLoaded: PropTypes.func.isRequired,
    addFavourite: PropTypes.func.isRequired,
    removeFavourite: PropTypes.func.isRequired,
  };

  static defaultProps = {
    photosRecords: [],
    favouritesRecords: [],
    handleImagesLoaded: () => {},
    addFavourite: () => {},
    removeFavourite: () => {},
  };

  renderGalleryItemButton = (element) => {
    const { favouritesRecords } = this.props;

    if(favouritesRecords.includes(element)) {
      return (
        <StyledIcon remove onClick={() => this.props.removeFavourite(element)}>
          <HeartIcon/>
        </StyledIcon>
      );
    }

    return (
      <StyledIcon add onClick={() => this.props.addFavourite(element)}>
        <HeartIcon/>
      </StyledIcon>
    );
  };

  renderGalleryItem = () => this.props.photosRecords.map((element, index) =>
      <StyledGalleryItem key={element + index}>
        <StyledGalleryImage src={element}>
        </StyledGalleryImage>
        <StyledGalleryItemOverlay>
          {this.renderGalleryItemButton(element)}
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