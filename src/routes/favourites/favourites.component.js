import React, { PureComponent, Fragment } from 'react';

// Components
import Header from 'components/header/header.component';
import Gallery from 'components/gallery/gallery.component';


// Styles
import { StyledDescription } from './favourites.style';
import { Wrapper } from 'styledElements';
import PropTypes from "prop-types";


class FavouritesComponent extends PureComponent {
  static propTypes = {
    favouritesRecords: PropTypes.array.isRequired,
    addFavourite: PropTypes.func.isRequired,
    removeFavourite: PropTypes.func.isRequired,
  };

  static defaultProps = {
    favouritesRecords: [],
    addFavourite: () => {},
    removeFavourite: () => {},
  };

  render() {
    const { favouritesRecords, addFavourite, removeFavourite } = this.props;

    return (
      <Fragment>
        <Header />
        <Wrapper>
          <StyledDescription>
            My <span>favourites images</span>
          </StyledDescription>
          <Gallery
            photosRecords={favouritesRecords}
            favouritesRecords={favouritesRecords}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        </Wrapper>
      </Fragment>
    );
  }
}

export default FavouritesComponent;
