import styled, { css } from "styled-components";
import Masonry from "react-masonry-component";
import PreloadImage from "react-preload-image";

import { Screen } from 'styles';


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

export const StyledGalleryItem = styled.div`
  display:inline-block;
  margin: 10px;
  transition: left 300ms ease-in-out;
  width: calc(25% - 20px);
  
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