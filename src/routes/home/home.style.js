import styled from 'styled-components';
import * as RRD from 'react-router-dom';
import Masonry from 'react-masonry-component';
import Image from "react-graceful-image";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col } from 'react-bootstrap';

import { Color } from 'styles';

export const Description = styled.div`
  margin: 135px 0;
  text-align: center;
  
  span {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const TaskLink = styled(RRD.Link)`
  background: ${Color.Green};
  border-bottom: 2px solid ${Color.DarkGreen};
  border-radius: 5px;
  color: ${Color.White};
  display: block;
  font-weight: bold;
  line-height: 45px;
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  width: 350px;

  &:hover{
    background: ${Color.DarkGreen};
  }
  
  svg {
    width: 30px;
    height: 15px;
    fill: #fff;
  }
`;


export const TempGallery = styled.div`
  margin-left: -100000px;
`;

export const GalleryMainWrapper = styled.div`
  display: inline-block;
  width:100%;
`;

export const GalleryWrapper = styled(Masonry)`
  overflow: hidden;
  margin-left: ${props => props.isReadyDisplay ? 0 : '-10000px'};
`;
export const GalleryItem = styled(Col)`
  box-sizing: border-box;
  display:inline-block;
  padding: 10px;
  width: 25%;
  transition: left 300ms ease-in-out;
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  //transition: all 300ms ease-in-out;
`;