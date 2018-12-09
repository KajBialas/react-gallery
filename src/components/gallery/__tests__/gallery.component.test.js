import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import GalleryComponent from '../gallery.component';

describe('GalleryComponent', () => {
  it('should shallows correctly if records are empty', () => {
    const component = shallow(<GalleryComponent />);

    expect(component).toMatchSnapshot();
  });

  it('should shallows correctly if records has data', () => {
    const props = {
      photosRecords: ['1.jpg', '2.jpg'],
    };
    const component = shallow(<GalleryComponent {...props} />);

    expect(component).toMatchSnapshot();
  });
});