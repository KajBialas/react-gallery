import React from 'react';
import { shallow } from 'enzyme';
import FavouritesComponent from '../favourites.component';

describe('FavouritesComponent', () => {
  it('should shallows correctly', () => {
    const component = shallow(<FavouritesComponent />);

    expect(component).toMatchSnapshot();
  });
});