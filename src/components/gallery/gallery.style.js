import styled from "styled-components";
import Masonry from "react-masonry-component";
import PreloadImage from "react-preload-image";

export const GalleryMainWrapper = styled.div`
  display: inline-block;
  width:100%;
`;

export const GalleryWrapper = styled(Masonry)`
  overflow: hidden;
`;

export const GalleryItem = styled.div`
  display:inline-block;
  margin: 10px;
  transition: left 300ms ease-in-out;
  width: calc(25% - 20px);
`;

export const GalleryImage = styled(PreloadImage)`
  display: block;
  width: 100%;
  height: 200px;
`;