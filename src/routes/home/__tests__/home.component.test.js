import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../home.component';

describe('HomeComponent', () => {
  const defaultProps = {
    photosRecords: [],
    photosLoading: false,
    photosError: false,
    photosInit: jest.fn(),
    photosRequest: jest.fn(),
  };
  it('should shallows correctly if photosRecords is empty', () => {
    const component = shallow(<HomeComponent {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should shallows correctly if photosRecords has records', () => {
    defaultProps.photosRecords = ['1.jpg', '2.jpg'];
    const component = shallow(<HomeComponent {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should run function photosInit on componentDidMount correctly', () => {
    const component = shallow(<HomeComponent {...defaultProps} />);

    expect(defaultProps.photosInit).toHaveBeenCalled();
  });

  it('should run function photosRequest on componentDidMount correctly', () => {
    const component = shallow(<HomeComponent {...defaultProps} />);

    expect(defaultProps.photosRequest).toHaveBeenCalled();
  });

  it('method handleImagesLoaded should set correct state', () => {
    const component = shallow(<HomeComponent {...defaultProps} />);
    component.instance().handleImagesLoaded();

    expect(component.instance().state.imagesLoaded).toEqual(true);
  });
});