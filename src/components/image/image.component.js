import React, { PureComponent, Fragment } from "react";
import { StyledImage  } from "./image.style";
import PreloadImage from 'react-preload-image';

class ImageComponent extends PureComponent {
  state = {
    isVisible: false,
  };

  setVisible = () => setTimeout(() => this.setState({isVisible: true}), 2000);

  render() {
    const { isVisible } = this.state;

    return (

        <StyledImage isVisible={isVisible} >
          <PreloadImage src={this.props.src} lazy />
        </StyledImage>
    );
  }
}

export default ImageComponent;