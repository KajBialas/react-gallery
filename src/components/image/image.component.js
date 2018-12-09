import React, { PureComponent, Fragment } from "react";
import { StyledImage  } from "./image.style";

class ImageComponent extends PureComponent {
  state = {
    isVisible: false,
  };

  setVisible = () => setTimeout(() => this.setState({isVisible: true}), 2000);

  render() {
    const { isVisible } = this.state;

    return (
      <StyledImage isVisible={isVisible} >
        <img onLoad={this.setVisible} src={this.props.src}/>
      </StyledImage>
    );
  }
}

export default ImageComponent;