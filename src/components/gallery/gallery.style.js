import styled, { css } from "styled-components";
import Masonry from "react-masonry-component";
import PreloadImage from "react-preload-image";

import { Color, Screen } from 'styles';


export const StyledGalleryMainWrapper = styled.div`
  display: inline-block;
  width:100%;
`;

export const StyledGalleryWrapper = styled(Masonry)`
  overflow: hidden;
`;

const SmallGalleryItemStyle = css`
  width: calc(50% - 20px);
`;

export const StyledGalleryItemOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 300ms ease-in-out;
  opacity: 0;
  
  svg {
    display: block;
    fill: ${Color.White};
    height: 50px;
    width: 50px;
    
    &:hover {
      cursor: pointer;
      fill: ${Color.Red};
    }
  }
`;

export const StyledGalleryItem = styled.div`
  display:inline-block;
  margin: 10px;
  transition: opacity 300ms ease-in-out;
  width: calc(25% - 20px);
  
  &:hover ${StyledGalleryItemOverlay} {
    opacity: 1;
  }
  
  ${Screen.small(SmallGalleryItemStyle)}
`;

export const StyledGalleryImage = styled(PreloadImage)`
  display: block;
  width: 100%;
  height: 200px;
`;

export const StyledDescription = styled.div`
  margin: 135px 0;
  text-align: center;
`;


