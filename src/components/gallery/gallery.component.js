import React, { PureComponent } from "react";
import {GalleryMainWrapper, GalleryWrapper, GalleryImage, GalleryItem} from "./gallery.style.js";

class GalleryComponent extends PureComponent {

  renderGalleryItem = () => this.props.photosRecords.map((element) => {
    return (
      <GalleryItem>
        <GalleryImage src={element} />
      </GalleryItem>
    );
  });

  render() {
    return (
      <GalleryMainWrapper>
        <GalleryWrapper
          onImagesLoaded={this.props.handleImagesLoaded}
        >
          {this.renderGalleryItem()}
        </GalleryWrapper>
      </GalleryMainWrapper>
    );
  }
}

export default GalleryComponent;